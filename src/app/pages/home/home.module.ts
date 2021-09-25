import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';
import { NguixIconComponentModule, NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// import { PostDataPipeModule } from '@lamnhan/ngx-schemata';
// import { NguixPostComponentModule } from '../../../../projects/starter/src/lib/components/post/post.module';

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
    // PostDataPipeModule,
    // NguixPostComponentModule,
  ]
})
export class HomePageModule {}
