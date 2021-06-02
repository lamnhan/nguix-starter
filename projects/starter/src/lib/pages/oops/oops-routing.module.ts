import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OopsPage } from './oops.component';

const routes: Routes = [{ path: '', component: OopsPage }];

/**
 * @ignore
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OopsRoutingModule {}
