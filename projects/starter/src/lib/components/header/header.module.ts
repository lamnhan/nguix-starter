import { NgModule } from '@angular/core';

import { HeaderRawComponentModule } from '../header-raw/header-raw.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    HeaderRawComponentModule
  ],
  exports: [HeaderComponent]
})
export class HeaderComponentModule { }
