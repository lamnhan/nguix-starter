import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../../components/page/page.module';
import { PagebodyComponentModule } from '../../../components/pagebody/pagebody.module';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';


@NgModule({
  declarations: [
    TermsComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    PagebodyComponentModule,
    TermsRoutingModule
  ]
})
export class TermsPageModule {}
