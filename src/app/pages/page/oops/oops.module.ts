import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../../components/page/page.module';
import { PagebodyComponentModule } from '../../../components/pagebody/pagebody.module';

import { OopsRoutingModule } from './oops-routing.module';
import { OopsComponent } from './oops.component';


@NgModule({
  declarations: [
    OopsComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    PagebodyComponentModule,
    OopsRoutingModule
  ]
})
export class OopsPageModule { }
