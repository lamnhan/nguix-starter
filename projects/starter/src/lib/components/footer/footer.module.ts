import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { FooterComponent } from './footer.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
  ],
  exports: [FooterComponent]
})
export class NguixFooterComponentModule { }
