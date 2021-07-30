import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { StorageService } from '@lamnhan/ngx-useful';
import * as Croppie from 'croppie';

interface Uploading {
  uploadPercent$: Observable<undefined | number>;
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
  @Output() done = new EventEmitter<string>();

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
      this.storageService.compressImage(this.cropResult).subscribe(data =>
        this.uploadBlob(
          data,
          url => {
            this.done.emit(url);
            this.closeAndReset();
          }
        )
      );
    }
  }

  private uploadBlob(blob: Blob, completed: (url: string) => void) {
    const {ref, task} = this.storageService.uploadBlob(
      `${this.uid}/cover.jpg`,
      blob,
      {
        uploadFolder: 'user-content',
        noDateGrouping: true,
        noRandomSuffix: true,
      }
    );
    // uploading
    this.uploading = {
      uploadPercent$: task.percentageChanges(),
    };
    // completed
    task.snapshotChanges()
      .pipe(
        finalize(() => ref.getDownloadURL().subscribe(completed)),
      )
      .subscribe();
  }

}
