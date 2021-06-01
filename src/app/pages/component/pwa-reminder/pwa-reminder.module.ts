import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixPwaReminderComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { PwaReminderRoutingModule } from './pwa-reminder-routing.module';
import { PwaReminderComponent } from './pwa-reminder.component';


@NgModule({
  declarations: [
    PwaReminderComponent
  ],
  imports: [
    CommonModule,
    NguixPwaReminderComponentModule,
    PageComponentModule,
    CompbodyComponentModule,
    PwaReminderRoutingModule
  ]
})
export class PwaReminderPageModule {}
