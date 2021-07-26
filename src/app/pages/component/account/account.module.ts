import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixAccountComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixAccountComponentModule,
    AccountRoutingModule
  ]
})
export class AccountPageModule { }
