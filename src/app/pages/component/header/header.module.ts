import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponentModule } from '../../../components/menu/menu.module';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MenuComponentModule,
    HeaderRoutingModule
  ]
})
export class HeaderPageModule {}
