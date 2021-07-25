import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixIconComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { IconRoutingModule } from './icon-routing.module';
import { IconComponent } from './icon.component';


@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixIconComponentModule,
    IconRoutingModule,
  ]
})
export class IconPageModule { }
