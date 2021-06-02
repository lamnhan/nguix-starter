import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { FooterComponent } from './footer.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterLinkDirectiveModule,
  ],
  exports: [FooterComponent]
})
export class NguixFooterComponentModule { }
