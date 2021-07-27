import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { StorageService, MediaItem } from '@lamnhan/ngx-useful';

interface Uploading {
  name: string;
  size: number;
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
  @Output() done = new EventEmitter<MediaItem>();

  selectedFile?: string;
  uploading?: Uploading;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  fileSelected(e: any) {
    const file = e.target.files[0] as File;
    const { type, size } = file;
    if (['image/jpeg', 'image/png'].indexOf(type) !== -1 && size < 10 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFile = e.target.result;
      }
      reader.readAsDataURL(file);
    } else {
      alert('Only image (.jpg, .png) less then 10MB is supported.');
    }
  }

  uploadFile(e: any) {
    const file = e.target.files[0];
    const {name: path, size} = file;
    const {name, fullPath, task} = this.storageService.uploadFile(path, file);
    // uploading
    this.uploading = {
      name,
      size,
      uploadPercent$: task.percentageChanges(),
    };
    // completed
    task.snapshotChanges().pipe(
      finalize(() => {
        const result = this.storageService.buildMediaItem(name, fullPath);
        // event
        this.done.emit(result);
        // exit
        this.closeAndReset();
      })
    ).subscribe();
  }

  closeAndReset() {
    this.callerId = '';
    this.selectedFile = undefined;
    this.uploading = undefined;
  }

}
