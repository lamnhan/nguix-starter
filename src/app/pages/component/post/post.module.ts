import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixPostComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixPostComponentModule,
    PostRoutingModule
  ]
})
export class PostModule { }
