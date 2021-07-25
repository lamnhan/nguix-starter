import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
  ],
  exports: [LoginComponent]
})
export class NguixLoginComponentModule {}
