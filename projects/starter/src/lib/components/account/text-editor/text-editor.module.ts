import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { TextEditorComponent } from './text-editor.component';

@NgModule({
  declarations: [TextEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslocoModule,
  ],
  exports: [TextEditorComponent]
})
export class NguixAccountTextEditorComponentModule {}
