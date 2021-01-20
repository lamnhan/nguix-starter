import { NgModule } from '@angular/core';

import { HeaderRawComponentModule } from './components/header-raw/header-raw.module';
import { HeaderComponentModule } from './components/header/header.module';
import { FooterRawComponentModule } from './components/footer-raw/footer-raw.module';
import { FooterComponentModule } from './components/footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    HeaderRawComponentModule,
    HeaderComponentModule,
    FooterRawComponentModule,
    FooterComponentModule
  ],
  exports: [
    HeaderRawComponentModule,
    HeaderComponentModule,
    FooterRawComponentModule,
    FooterComponentModule
  ]
})
export class NguiStarterModule { }
