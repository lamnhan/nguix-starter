import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { StorageService } from '@lamnhan/ngx-useful';
import * as Croppie from 'croppie';

interface Uploading {
  uploadPercent$: Observable<undefined | number>;
}

interface ResourceAlike {
  name: string;
  src: string;
}

@Component({
  selector: 'nguix-account-cover-editor',
  templateUrl: './cover-editor.component.html',
  styleUrls: ['./cover-editor.component.scss']
})
export class CoverEditorComponent implements OnInit, OnChanges {
  @Input() uid!: string;
  @Input() file!: File;
  @Output() close = new EventEmitter<void>();
  @Output() done = new EventEmitter<Record<string, ResourceAlike>>();

  // editor
  isProcessing = false;
  uploading?: Uploading;
  cropResult?: Blob;

  // cropper
  fileDataUrl?: string;
  cropperOptions!: Croppie.CroppieOptions;
  cropperResultOptions: Croppie.ResultOptions = {
    size: {
      width: 1920,
      height: 1080,
    }
  };

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    // get data url from file input
    this.storageService.readFileDataUrl(this.file)
      .subscribe(dataUrl => {
        this.fileDataUrl = dataUrl;
        // re-calculate croppie options
        const width = document.getElementById('cover-editor')?.clientWidth || 250;
        const height = (width * 56.25) / 100;
        this.cropperOptions = {
          viewport: {
            width,
            height
          },
          boundary: {
            width,
            height,
          },
          enableZoom: true,
          showZoomer: false,
        };
      });
  }

  closeAndReset() {
    this.isProcessing = false;
    this.uploading = undefined;
    this.cropResult = undefined;
    this.close.emit();
  }

  processCover() {
    if (this.cropResult) {
      this.isProcessing = true;
      combineLatest([
        this.storageService.compressImage(this.cropResult, { width: 480, height: 270 }),
        this.storageService.compressImage(this.cropResult, { width: 720, height: 405 }),
        this.storageService.compressImage(this.cropResult, { width: 1280, height: 720 }),
        this.storageService.compressImage(this.cropResult),
      ])
      .subscribe(data =>
        this.uploadBlobs(
          [
            { size: 'sm', blob: data[0] },
            { size: 'md', blob: data[1] },
            { size: 'lg', blob: data[2] },
            { size: 'xl', blob: data[3] },
          ],
          result => {
            this.done.emit(result);
            this.closeAndReset();
          }
        )
      );
    }
  }

  private uploadBlobs(
    inputs: Array<{ size: string, blob: Blob }>,
    completed: (result: Record<string, ResourceAlike>) => void
  ) {
    const uploads = inputs.map(input =>
      ({
        ...this.storageService.uploadBlob(
          `${this.uid}/cover-${input.size}.jpg`,
          input.blob,
          {
            uploadFolder: 'user-content',
            noDateGrouping: true,
            noRandomSuffix: true,
          }
        ),
        input,
      })
    );
    // uploading
    this.uploading = {
      uploadPercent$: combineLatest(uploads.map(upload => upload.task.percentageChanges())).pipe(
        map(percents =>
          ((percents.reduce((result = 0, item = 0) => (result + item), 0) || percents.length) / percents.length)
        ),
      ),
    };
    // completed
    const resultArr: ResourceAlike[] = [];
    uploads.forEach(upload => {
      upload.task.snapshotChanges()
        .pipe(
          finalize(() =>
            upload.ref.getDownloadURL().subscribe(url => {
              resultArr.push({ name: upload.input.size, src: url });
              if (resultArr.length === uploads.length) {
                completed(
                  resultArr.reduce(
                    (result, item) => {
                      result[item.name] = item;
                      return result;
                    },
                    {} as Record<string, ResourceAlike>,
                  )
                );
              }
            })
          ),
        )
        .subscribe();
    });
  }

}
