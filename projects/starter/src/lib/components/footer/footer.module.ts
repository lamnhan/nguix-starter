import { NgModule } from '@angular/core';

import { FooterRawComponentModule } from '../footer-raw/footer-raw.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    FooterRawComponentModule
  ],
  exports: [FooterComponent]
})
export class FooterComponentModule { }
