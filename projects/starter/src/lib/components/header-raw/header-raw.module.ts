import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRawComponent } from './header-raw.component';

@NgModule({
  declarations: [HeaderRawComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderRawComponent]
})
export class HeaderRawComponentModule { }
