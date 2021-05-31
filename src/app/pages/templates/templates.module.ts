import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../components/page/page.module';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';


@NgModule({
  declarations: [
    TemplatesComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesPageModule {}
