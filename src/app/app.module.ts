import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  HeaderComponentModule,
  FooterComponentModule,
  OopsComponentModule
} from '@lamnhan/nguix-starter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { OopsComponent } from './pages/oops/oops.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OopsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // app.component.html
    HeaderComponentModule,
    FooterComponentModule,
    // pages/oops/oops.component.html
    OopsComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
