import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';
import { NguixIconComponentModule, NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


import { VideosDataPipeModule } from '@lamnhan/ngx-schemata';
import { NguixVideosComponentModule } from '../../../../projects/starter/src/lib/components/videos/videos.module';
import { NguixSkeletonVideosComponentModule } from '../../../../projects/starter/src/lib/components/skeleton-videos/skeleton-videos.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterLinkDirectiveModule,
    NguixIconComponentModule,
    NguixContentComponentModule,
    HomeRoutingModule,
    VideosDataPipeModule,
    NguixVideosComponentModule,
    NguixSkeletonVideosComponentModule,
  ]
})
export class HomePageModule {}
