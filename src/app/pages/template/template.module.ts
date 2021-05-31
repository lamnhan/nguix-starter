import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponentModule } from '../../components/menu/menu.module';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    MenuComponentModule,
    TemplateRoutingModule
  ]
})
export class TemplatePageModule {}
