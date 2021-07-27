import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as Croppie from 'croppie';
import { StorageService } from '@lamnhan/ngx-useful';

interface Uploading {
  uploadPercent$: Observable<undefined | number>;
}

@Component({
  selector: 'nguix-account-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss']
})
export class ImageEditorComponent implements OnInit {
  @Input() callerId = '';
  @Input() uid!: string;
  @Output() close = new EventEmitter<void>();
  @Output() done = new EventEmitter<{ callerId: string; url: string; }>();

  fileLoaded = false;
  croppie?: Croppie;

  uploading?: Uploading;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  fileSelected(e: any) {
    const file = e.target.files[0] as File;
    const { type, size } = file;
    if (['image/jpeg', 'image/png'].indexOf(type) !== -1 && size < 10 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fileLoaded = true;
        this.croppie = this.initCroppie(e.target.result);
      }
      reader.readAsDataURL(file);
    } else {
      alert('Only image (.jpg, .png) less then 10MB is supported.');
    }
  }

  doneCropping() {
    if (this.croppie) {
      const size = this.callerId === 'avatar'
        ? { width: 320, height: 320 }
        : this.callerId === 'cover'
          ? { width: 1920, height: 1080 }
          : 'viewport';
      this.croppie
        .result({
          type: 'blob',
          format: 'jpeg',
          size,
        })
        .then(blob => this.uploadBlob(blob));
    }
  }

  uploadBlob(blob: Blob) {
    const {name, fullPath, task} = this.storageService.uploadBlob(
      `${this.uid}/${this.callerId}.jpg`,
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
          .subscribe(url => {
            // event
            this.done.emit({ callerId: this.callerId, url });
            // exit
            this.closeAndReset();
          });
      })
    ).subscribe();
  }

  closeAndReset() {
    this.fileLoaded = false;
    this.croppie?.destroy();
    this.croppie = undefined;
    this.uploading = undefined;
    this.close.emit();
  }

  private initCroppie(url: string) {
    const el = document.getElementById('croppie-image-editor');
    if (el) {
      const avatarConfig: any = {
        viewport: {
          width: 150,
          height: 150
        },
      };
      const coverConfig: any = {
        viewport: {
          width: 320,
          height: 180,
        },        
      };
      const croppie = new Croppie(
        el,
        {
          ...(
            this.callerId === 'avatar'
              ? avatarConfig
              : this.callerId === 'cover'
                ? coverConfig
                : {}
          ),
          boundary: {
            width: 320,
            height: 320,
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
