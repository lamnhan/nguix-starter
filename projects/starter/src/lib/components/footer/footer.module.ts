import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
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
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-footer', alias: 'NGUIX_FOOTER' },
  }],
  exports: [FooterComponent]
})
export class NguixFooterComponentModule { }
