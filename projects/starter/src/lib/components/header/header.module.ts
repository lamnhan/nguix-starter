import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { HeaderComponent } from './header.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
  ],
  exports: [HeaderComponent]
})
export class NguixHeaderComponentModule { }
