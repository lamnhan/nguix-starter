import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { NguixOopsComponentModule } from '../../components/oops/oops.module';

import { OopsRoutingModule } from './oops-routing.module';
import { OopsPage } from './oops.component';

/**
 * @ignore
 */

@NgModule({
  declarations: [OopsPage],
  imports: [
    CommonModule,
    RouterLinkDirectiveModule,
    NguixOopsComponentModule,
    OopsRoutingModule
  ],
  exports: [OopsPage]
})
export class NguixOopsPageModule {}
