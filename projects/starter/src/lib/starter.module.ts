import { NgModule } from '@angular/core';

import { HeaderComponentModule } from './components/header/header.module';
import { FooterComponentModule } from './components/footer/footer.module';
import { OopsComponentModule } from './components/oops/oops.module';

@NgModule({
  declarations: [],
  imports: [
    HeaderComponentModule,
    FooterComponentModule,
    OopsComponentModule,
  ],
  exports: [
    HeaderComponentModule,
    FooterComponentModule,
    OopsComponentModule,
  ]
})
export class NguixStarterModule { }
