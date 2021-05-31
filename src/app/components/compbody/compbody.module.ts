import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';
import { NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { CompbodyComponent } from './compbody.component';

@NgModule({
  declarations: [CompbodyComponent],
  imports: [
    CommonModule,
    NguixContentComponentModule,
    RouterLinkDirectiveModule,
  ],
  exports: [CompbodyComponent]
})
export class CompbodyComponentModule {}
