import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { OopsComponent } from './oops.component';

@NgModule({
  declarations: [OopsComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
  ],
  exports: [OopsComponent]
})
export class NguixOopsComponentModule { }
