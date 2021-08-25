import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { NguixIconComponentModule } from '../icon/icon.module';
import { NguixAccountTextEditorComponentModule } from './text-editor/text-editor.module';
import { NguixAccountAvatarComponentModule } from './avatar/avatar.module';
import { NguixAccountCoverComponentModule } from './cover/cover.module';

import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
    NguixIconComponentModule,
    NguixAccountTextEditorComponentModule,
    NguixAccountAvatarComponentModule,
    NguixAccountCoverComponentModule,
  ],
  exports: [AccountComponent]
})
export class NguixAccountComponentModule {}
