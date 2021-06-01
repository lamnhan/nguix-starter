import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwaReminderComponent } from './pwa-reminder.component';

const routes: Routes = [{ path: '', component: PwaReminderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwaReminderRoutingModule { }
