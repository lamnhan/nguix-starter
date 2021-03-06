import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixHeaderComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NguixHeaderComponentModule,
    PageComponentModule,
    CompbodyComponentModule,
    HeaderRoutingModule
  ]
})
export class HeaderPageModule {}
