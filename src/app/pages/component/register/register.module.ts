import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixRegisterComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixRegisterComponentModule,
    RegisterRoutingModule,
  ]
})
export class RegisterPageModule { }
