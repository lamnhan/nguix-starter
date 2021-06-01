import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSpinnerComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { SpinnerRoutingModule } from './spinner-routing.module';
import { SpinnerComponent } from './spinner.component';


@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    NguixSpinnerComponentModule,
    PageComponentModule,
    CompbodyComponentModule,
    SpinnerRoutingModule
  ]
})
export class SpinnerPageModule {}
