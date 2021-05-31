import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { OopsComponent } from './oops.component';

@NgModule({
  declarations: [OopsComponent],
  imports: [
    CommonModule,
    RouterLinkDirectiveModule,
  ],
  exports: [OopsComponent]
})
export class NguixOopsComponentModule { }
