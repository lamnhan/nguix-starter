import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { NguixIconComponentModule } from '../../icon/icon.module';
import { NguixAccountAvatarEditorComponentModule } from '../avatar-editor/avatar-editor.module';

import { AvatarComponent } from './avatar.component';

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    NguixIconComponentModule,
    NguixAccountAvatarEditorComponentModule,
  ],
  exports: [AvatarComponent]
})
export class NguixAccountAvatarComponentModule {}
