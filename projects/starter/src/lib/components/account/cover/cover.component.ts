import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@lamnhan/ngx-useful';
import * as basicLightbox from 'basiclightbox';

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
    private userService: UserService,
  ) {}

  ngOnInit(): void {}

  viewCover() {
    if (this.coverPhoto) {
      return basicLightbox.create(`
        <img width="1920" height="1080" src="${this.coverPhoto}">
      `)
      .show();
    }
    return null;
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

}
