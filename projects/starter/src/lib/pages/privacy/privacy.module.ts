import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguixSpinnerComponentModule } from '../../components/spinner/spinner.module';
import { NguixContentComponentModule } from '../../components/content/content.module';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyPage } from './privacy.component';

/**
 * @ignore
 */

@NgModule({
  declarations: [PrivacyPage],
  imports: [
    CommonModule,
    NguixSpinnerComponentModule,
    NguixContentComponentModule,
    PrivacyRoutingModule
  ]
})
export class NguixPrivacyPageModule {}
