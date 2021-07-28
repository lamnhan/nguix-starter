import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { NguixIconComponentModule } from '../../icon/icon.module';
import { NguixAccountCoverEditorComponentModule } from '../cover-editor/cover-editor.module';

import { CoverComponent } from './cover.component';

@NgModule({
  declarations: [CoverComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    NguixIconComponentModule,
    NguixAccountCoverEditorComponentModule,
  ],
  exports: [CoverComponent]
})
export class NguixAccountCoverComponentModule {}
