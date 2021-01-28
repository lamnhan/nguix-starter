import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NguixStarterModule } from '@lamnhan/nguix-starter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguixStarterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
