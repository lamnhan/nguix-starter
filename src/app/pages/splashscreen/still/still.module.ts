import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../../components/page/page.module';
import { SplashbodyComponentModule } from '../../../components/splashbody/splashbody.module';

import { StillRoutingModule } from './still-routing.module';
import { StillComponent } from './still.component';


@NgModule({
  declarations: [
    StillComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    SplashbodyComponentModule,
    StillRoutingModule
  ]
})
export class StillModule { }
