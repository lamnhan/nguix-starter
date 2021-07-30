import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { NguixImageCropperComponentModule } from '../../image-cropper/image-cropper.module';

import { AvatarEditorComponent } from './avatar-editor.component';

@NgModule({
  declarations: [AvatarEditorComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    NguixImageCropperComponentModule,
  ],
  exports: [AvatarEditorComponent]
})
export class NguixAccountAvatarEditorComponentModule {}
