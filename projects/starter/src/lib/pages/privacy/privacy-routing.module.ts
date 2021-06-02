import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPage } from './privacy.component';

const routes: Routes = [{ path: '', component: PrivacyPage }];

/**
 * @ignore
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyRoutingModule {}
