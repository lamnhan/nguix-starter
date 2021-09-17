import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixNavIndicatorComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { NetworkIndicatorRoutingModule } from './network-indicator-routing.module';
import { NetworkIndicatorComponent } from './network-indicator.component';


@NgModule({
  declarations: [
    NetworkIndicatorComponent
  ],
  imports: [
    CommonModule,
    NguixNavIndicatorComponentModule,
    PageComponentModule,
    CompbodyComponentModule,
    NetworkIndicatorRoutingModule
  ]
})
export class NetworkIndicatorPageModule { }
