import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixShareComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';


@NgModule({
  declarations: [
    ShareComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixShareComponentModule,
    ShareRoutingModule,
  ]
})
export class SharePageModule { }
