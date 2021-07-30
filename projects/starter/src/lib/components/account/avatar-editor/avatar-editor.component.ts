import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { StorageService } from '@lamnhan/ngx-useful';
import * as Croppie from 'croppie';

interface Uploading {
  uploadPercent$: Observable<undefined | number>;
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
  @Output() done = new EventEmitter<string>();

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
    task.snapshotChanges()
      .pipe(
        finalize(() => ref.getDownloadURL().subscribe(completed)),
      )
      .subscribe();
  }

}
