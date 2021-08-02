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
  selector: 'nguix-account-avatar-editor',
  templateUrl: './avatar-editor.component.html',
  styleUrls: ['./avatar-editor.component.scss']
})
export class AvatarEditorComponent implements OnInit, OnChanges {
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
  cropperOptions: Croppie.CroppieOptions = {
    viewport: {
      width: 120,
      height: 120
    },
    boundary: {
      width: 250,
      height: 250,
    },
    showZoomer: true,
  };
  cropperResultOptions: Croppie.ResultOptions = {
    size: {
      width: 500,
      height: 500,
    }
  };

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    // get data url from file input
    this.storageService.readFileDataUrl(this.file)
    .subscribe(dataUrl => this.fileDataUrl = dataUrl);
  }

  closeAndReset() {
    this.isProcessing = false;
    this.uploading = undefined;
    this.cropResult = undefined;
    this.close.emit();
  }

  processAvatar() {
    if (this.cropResult) {
      this.isProcessing = true;
      combineLatest([
        this.storageService.compressImage(this.cropResult, { width: 40, height: 40 }),
        this.storageService.compressImage(this.cropResult, { width: 200, height: 200 }),
        this.storageService.compressImage(this.cropResult),
      ])
      .subscribe(data =>
        this.uploadBlobs(
          [
            { size: 'sm', blob: data[0] },
            { size: 'md', blob: data[1] },
            { size: 'lg', blob: data[2] },
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
          `${this.uid}/avatar-${input.size}.jpg`,
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
