import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { AvatarEditorComponent } from './avatar-editor.component';

@NgModule({
  declarations: [AvatarEditorComponent],
  imports: [
    CommonModule,
    TranslocoModule,
  ],
  exports: [AvatarEditorComponent]
})
export class NguixAccountAvatarEditorComponentModule {}
