import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixTabsComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixTabsComponentModule,
    TabsRoutingModule,
  ]
})
export class TabsPageModule { }
