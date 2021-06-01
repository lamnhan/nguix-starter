import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixPwaBoxComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { PwaBoxRoutingModule } from './pwa-box-routing.module';
import { PwaBoxComponent } from './pwa-box.component';


@NgModule({
  declarations: [
    PwaBoxComponent
  ],
  imports: [
    CommonModule,
    NguixPwaBoxComponentModule,
    PageComponentModule,
    CompbodyComponentModule,
    PwaBoxRoutingModule
  ]
})
export class PwaBoxPageModule { }
