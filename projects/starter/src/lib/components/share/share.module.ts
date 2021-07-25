import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguixIconComponentModule } from '../icon/icon.module';

import { ShareComponent } from './share.component';

@NgModule({
  declarations: [ShareComponent],
  imports: [
    CommonModule,
    NguixIconComponentModule,
  ],
  exports: [ShareComponent]
})
export class NguixShareComponentModule {}
