import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
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
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-account', alias: 'NGUIX_ACCOUNT' },
  }],
  exports: [AccountComponent]
})
export class NguixAccountComponentModule {}
