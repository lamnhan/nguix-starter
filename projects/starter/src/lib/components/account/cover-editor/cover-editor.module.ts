import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { CoverEditorComponent } from './cover-editor.component';

@NgModule({
  declarations: [CoverEditorComponent],
  imports: [
    CommonModule,
    TranslocoModule,
  ],
  exports: [CoverEditorComponent]
})
export class NguixAccountCoverEditorComponentModule {}
