import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixLoginComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixLoginComponentModule,
    LoginRoutingModule,
  ]
})
export class LoginPageModule { }
