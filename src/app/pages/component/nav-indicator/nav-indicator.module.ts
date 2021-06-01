import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixNavIndicatorComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { NavIndicatorRoutingModule } from './nav-indicator-routing.module';
import { NavIndicatorComponent } from './nav-indicator.component';


@NgModule({
  declarations: [
    NavIndicatorComponent
  ],
  imports: [
    CommonModule,
    NguixNavIndicatorComponentModule,
    PageComponentModule,
    CompbodyComponentModule,
    NavIndicatorRoutingModule
  ]
})
export class NavIndicatorPageModule {}
