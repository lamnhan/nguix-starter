import { Component, OnInit, Input } from '@angular/core';
import { ModalService, UserService } from '@lamnhan/ngx-useful';

interface ResourceAlike {
  name: string;
  src: string;
}

@Component({
  selector: 'nguix-account-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() uid?: string;
  @Input() displayName?: string = 'User';
  @Input() thumbnails?: Record<string, ResourceAlike>;

  avatarEditorFile?: File;

  constructor(
    private modalService: ModalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  viewAvatar() {
    if (this.thumbnails) {
      return this.modalService
        .image((this.thumbnails.lg || this.thumbnails.default).src)
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

  handleAvatarChanged(thumbnails: Record<'sm' | 'md' | 'lg', ResourceAlike>) {
    return this.userService.updateProfile({
      photoURL: thumbnails.md.src,
      thumbnails,
    });
  }
}
