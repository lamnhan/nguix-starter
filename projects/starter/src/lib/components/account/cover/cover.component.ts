import { Component, OnInit, Input } from '@angular/core';
import { AlertService, ModalService, UserService } from '@lamnhan/ngx-useful';

interface ResourceAlike {
  name: string;
  src: string;
}

@Component({
  selector: 'nguix-account-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  @Input() uid?: string;
  @Input() images?: Record<string, ResourceAlike>;

  isProcessing = false;
  coverEditorFile?: File;

  constructor(
    private alertService: AlertService,
    private modalService: ModalService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {}

  viewCover() {
    if (this.images) {
      return this.modalService
        .image((this.images.xl || this.images.default).src)
        .show();
    }
    return null;
  }

  removeCover() {
    return this.alertService.confirm(
      {
        message: 'Are you sure to remove your cover photo?',
        confirmText: 'Remove cover'
      },
      yes => {
        if (yes) {
          this.userService.removeCoverPhoto();
        }
      }
    )
    .show();
  }

  coverSelected(e: any) {
    if (e.target.value) {
      const file = e.target.files[0] as File;
      const { type, size } = file;
      if (['image/jpeg', 'image/png'].indexOf(type) !== -1 && size < 10 * 1024 * 1024) {
        this.coverEditorFile = file;
      } else {
        this.alertService.alert({
          message: 'Only image (.jpg, .png) less then 10MB is supported.',
        })
        .show();
      }
      e.target.value = null;
    }
  }

  handleCoverChanged(images: Record<'sm' | 'md' | 'lg' | 'xl', ResourceAlike>) {
    return this.userService.updateProfile({
      coverPhoto: images.xl.src,
      images,
    });
  }

}
