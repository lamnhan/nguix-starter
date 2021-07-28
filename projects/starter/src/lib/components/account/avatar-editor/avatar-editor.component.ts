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
  selector: 'nguix-account-avatar-editor',
  templateUrl: './avatar-editor.component.html',
  styleUrls: ['./avatar-editor.component.scss']
})
export class AvatarEditorComponent implements OnInit, OnChanges {
  @Input() file?: File;
  @Input() uid!: string;

  @Output() close = new EventEmitter<void>();
  @Output() done = new EventEmitter<string>();

  croppieInstance?: Croppie;
  isProcessing = false;
  uploading?: Uploading;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.file && !this.croppieInstance) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.croppieInstance = this.getCroppie(e.target.result)
      reader.readAsDataURL(this.file);
    }
  }

  closeAndReset() {
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
          size: { width: 500, height: 500 },
          quality: 0.6,
        })
        .then(blob => this.processAvatar(blob));
    }
  }

  private processAvatar(blob: Blob) {
    this.isProcessing = true;
    this.compressImage(blob).then(data =>
      this.uploadBlob(
        data,
        url => {
          // event
          this.done.emit(url);
          // exit
          this.closeAndReset();
          // reset
          this.isProcessing = false;
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
      `${this.uid}/avatar.jpg`,
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

  private getCroppie(url: string) {
    const el = document.getElementById('croppie-image-editor');
    if (el) {
      const croppie = new Croppie(
        el,
        {
          viewport: {
            width: 120,
            height: 120
          },
          boundary: {
            width: 250,
            height: 250,
          },
          showZoomer: true,
        }
      );
      croppie.bind({ url });
      return croppie;
    }
    return undefined;
  }

}
