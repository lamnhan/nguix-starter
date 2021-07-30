import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { NguixImageCropperComponentModule } from '../../image-cropper/image-cropper.module';

import { CoverEditorComponent } from './cover-editor.component';

@NgModule({
  declarations: [CoverEditorComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    NguixImageCropperComponentModule,
  ],
  exports: [CoverEditorComponent]
})
export class NguixAccountCoverEditorComponentModule {}
