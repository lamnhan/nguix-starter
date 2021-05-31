import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixOopsPageModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { OopsRoutingModule } from './oops-routing.module';
import { OopsComponent } from './oops.component';


@NgModule({
  declarations: [
    OopsComponent
  ],
  imports: [
    CommonModule,
    NguixOopsPageModule,
    PageComponentModule,
    CompbodyComponentModule,
    OopsRoutingModule
  ]
})
export class OopsPageModule { }
