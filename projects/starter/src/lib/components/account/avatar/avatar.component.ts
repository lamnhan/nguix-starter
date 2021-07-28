import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@lamnhan/ngx-useful';
import * as basicLightbox from 'basiclightbox';

@Component({
  selector: 'nguix-account-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() uid?: string;
  @Input() displayName?: string = 'User';
  @Input() photoURL?: string;

  avatarEditorFile?: File;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  viewAvatar() {
    if (this.photoURL) {
      return basicLightbox.create(`
        <img width="500" height="500" src="${this.photoURL}">
      `)
      .show();
    }
    return null;
  }

  avatarSelected(e: any) {
    if (e.target.value) {
      const file = e.target.files[0] as File;
      const { type, size } = file;
      if (['image/jpeg', 'image/png'].indexOf(type) !== -1 && size < 10 * 1024 * 1024) {
        this.avatarEditorFile = file;
      } else {
        alert('Only image (.jpg, .png) less then 10MB is supported.');
      }
      e.target.value = null;
    }
  }

  handleAvatarChanged(photoURL: string) {
    return this.userService.updateProfile({ photoURL });
  }
}
