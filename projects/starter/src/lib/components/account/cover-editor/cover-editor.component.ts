import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { StorageService } from '@lamnhan/ngx-useful';
import * as Croppie from 'croppie';
import Compressor from 'compressorjs';

interface Uploading {
  uploadPercent$: Observable<undefined | number>;
}

@Component({
  selector: 'nguix-account-cover-editor',
  templateUrl: './cover-editor.component.html',
  styleUrls: ['./cover-editor.component.scss']
})
export class CoverEditorComponent implements OnInit, OnChanges {
  @Input() file?: File;
  @Input() uid!: string;
  @Output() close = new EventEmitter<void>();
  @Output() done = new EventEmitter<string>();
  
  containerWidth = 0;
  fileUrl?: string;
  croppieInstance?: Croppie;
  isProcessing = false;
  uploading?: Uploading;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.containerWidth = document.getElementById('cover-editor')?.clientWidth || 250;
        this.fileUrl = e.target.result;
        this.setCroppieInstance();
      };
      reader.readAsDataURL(this.file);
    }
  }

  closeAndReset() {
    this.fileUrl = undefined;
    this.isProcessing = false;
    this.uploading = undefined;
    this.croppieInstance?.destroy();
    this.croppieInstance = undefined;
    this.close.emit();
  }

  
  doneCropping() {
    if (this.croppieInstance) {
      this.croppieInstance
        .result({
          type: 'blob',
          format: 'jpeg',
          size: { width: 1920, height: 1080 },
          quality: 0.6,
        })
        .then(blob => this.processCover(blob));
    }
  }

  private processCover(blob: Blob) {
    this.isProcessing = true;
    this.compressImage(blob).then(data =>
      this.uploadBlob(
        data,
        url => {
          this.done.emit(url);
          this.closeAndReset();
        }
      )
    );
  }

  private compressImage(blob: Blob) {
    return new Promise<Blob>((resolve, reject) => new Compressor(
      blob,
      {
        quality: 0.6,
        mimeType: 'image/jpeg',
        success: data => resolve(data),
        error: err => reject(err),
      }
    ));
  }

  private uploadBlob(blob: Blob, completed: (url: string) => void) {
    const {name, fullPath, task} = this.storageService.uploadBlob(
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
    task.snapshotChanges().pipe(
      finalize(() => {
        this.storageService
          .buildMediaItem(name, fullPath)
          .downloadUrl$
          .subscribe(url => completed(url));
      })
    ).subscribe();
  }

  private setCroppieInstance() {
    const el = document.getElementById('croppie-image-editor');
    if (el && this.fileUrl) {
      const width = this.containerWidth;
      const height = (width * 56.25) / 100;
      // clear if exists
      this.croppieInstance?.destroy();
      // new instance
      const croppie = new Croppie(
        el,
        {
          viewport: {
            width,
            height,
          },
          boundary: {
            width,
            height,
          },
          enableZoom: true,
          showZoomer: false,
        }
      );
      croppie.bind({ url: this.fileUrl });
      // re-assign instance
      this.croppieInstance = croppie;
    }
  }

}
