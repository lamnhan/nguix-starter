import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    NguixContentComponentModule,
    PageComponentModule,
    CompbodyComponentModule,
    ContentRoutingModule
  ]
})
export class ContentPageModule {}
