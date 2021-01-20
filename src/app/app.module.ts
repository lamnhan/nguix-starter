import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NguiStarterModule } from '@lamnhan/ngui-starter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguiStarterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
