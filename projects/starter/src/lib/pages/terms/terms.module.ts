import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguixSpinnerComponentModule } from '../../components/spinner/spinner.module';
import { NguixContentComponentModule } from '../../components/content/content.module';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsPage } from './terms.component';


@NgModule({
  declarations: [TermsPage],
  imports: [
    CommonModule,
    NguixSpinnerComponentModule,
    NguixContentComponentModule,
    TermsRoutingModule,
  ],
})
export class NguixTermsPageModule {}
