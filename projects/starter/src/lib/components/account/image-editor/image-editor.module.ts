import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { ImageEditorComponent } from './image-editor.component';

@NgModule({
  declarations: [ImageEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslocoModule,
  ],
  exports: [ImageEditorComponent]
})
export class NguixAccountImageEditorComponentModule {}
