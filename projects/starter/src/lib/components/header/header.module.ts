import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { HeaderComponent } from './header.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterLinkDirectiveModule,
  ],
  exports: [HeaderComponent]
})
export class NguixHeaderComponentModule { }
