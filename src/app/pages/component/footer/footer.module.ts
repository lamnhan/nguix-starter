import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponentModule } from '../../../components/menu/menu.module';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MenuComponentModule,
    FooterRoutingModule
  ]
})
export class FooterPageModule {}
