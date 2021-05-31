import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../components/page/page.module';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    TemplateRoutingModule
  ]
})
export class TemplatePageModule {}
