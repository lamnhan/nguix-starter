import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixHeader2ndComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { Header2ndRoutingModule } from './header2nd-routing.module';
import { Header2ndComponent } from './header2nd.component';


@NgModule({
  declarations: [
    Header2ndComponent
  ],
  imports: [
    CommonModule,
    NguixHeader2ndComponentModule,
    PageComponentModule,
    CompbodyComponentModule,
    Header2ndRoutingModule
  ]
})
export class Header2ndPageModule {}
