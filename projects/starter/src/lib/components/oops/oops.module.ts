import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OopsComponent } from './oops.component';

@NgModule({
  declarations: [OopsComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [OopsComponent]
})
export class NguixOopsComponentModule { }
