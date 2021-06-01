import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule, SafePipeModule } from '@lamnhan/ngx-useful';
import { NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { PagebodyComponent } from './pagebody.component';

@NgModule({
  declarations: [PagebodyComponent],
  imports: [
    CommonModule,
    NguixContentComponentModule,
    RouterLinkDirectiveModule,
    SafePipeModule,
  ],
  exports: [PagebodyComponent]
})
export class PagebodyComponentModule {}
