import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { Header2ndComponent } from './header2nd.component';

@NgModule({
  declarations: [Header2ndComponent],
  imports: [
    CommonModule,
    RouterLinkDirectiveModule,
  ],
  exports: [Header2ndComponent]
})
export class NguixHeader2ndComponentModule { }
