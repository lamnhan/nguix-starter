import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../../components/page/page.module';
import { PagebodyComponentModule } from '../../../components/pagebody/pagebody.module';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';


@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    PagebodyComponentModule,
    PrivacyRoutingModule
  ]
})
export class PrivacyPageModule {}
