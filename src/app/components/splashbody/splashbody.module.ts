import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule, SafePipeModule } from '@lamnhan/ngx-useful';
import { NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { SplashbodyComponent } from './splashbody.component';

@NgModule({
  declarations: [SplashbodyComponent],
  imports: [
    CommonModule,
    NguixContentComponentModule,
    RouterLinkDirectiveModule,
    SafePipeModule,
  ],
  exports: [SplashbodyComponent]
})
export class SplashbodyComponentModule {}
