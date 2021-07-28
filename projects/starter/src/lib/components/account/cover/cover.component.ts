import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { UserService, StorageService } from '@lamnhan/ngx-useful';
import Compressor from 'compressorjs';

@Component({
  selector: 'nguix-account-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  @Input() uid?: string;
  @Input() coverPhoto?: string;

  isProcessing = false;
  coverEditorFile?: File;

  constructor(
    private storageService: StorageService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {}

  viewCover() {
    console.log(this.coverPhoto);
  }

  removeCover() {
    const yes = confirm('Are you sure to remove your cover photo?');
    if (yes) {
      return this.userService.removeCoverPhoto();
    }
    return null;
  }

  coverSelected(e: any) {
    if (e.target.value) {
      const file = e.target.files[0] as File;
      const { type, size } = file;
      if (['image/jpeg', 'image/png'].indexOf(type) !== -1 && size < 10 * 1024 * 1024) {
        this.coverEditorFile = file;
      } else {
        alert('Only image (.jpg, .png) less then 10MB is supported.');
      }
      e.target.value = null;
    }
  }

  handleCoverChanged(coverPhoto: string) {
    return this.userService.updateProfile({ coverPhoto });
  }

  private processCover(file: File) {
    this.isProcessing = true;
    this.compressImage(file).then(data =>
      this.uploadBlob(
        data,
        url => {
          this.userService.updateProfile({ coverPhoto: url });
          this.isProcessing = false;
        }
      ),
    );
  }

  private compressImage(file: File) {
    return new Promise<Blob>((resolve, reject) => new Compressor(
      file,
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

}
