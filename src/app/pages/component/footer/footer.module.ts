import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixFooterComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    NguixFooterComponentModule,
    PageComponentModule,
    CompbodyComponentModule,
    FooterRoutingModule,
  ]
})
export class FooterPageModule {}
