import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { NguixIconComponentModule } from '../icon/icon.module';
import { NguixAccountTextEditorComponentModule } from './text-editor/text-editor.module';

import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
    NguixIconComponentModule,
    NguixAccountTextEditorComponentModule,
  ],
  exports: [AccountComponent]
})
export class NguixAccountComponentModule {}
