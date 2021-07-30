import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixImageCropperComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { ImageCropperRoutingModule } from './image-cropper-routing.module';
import { ImageCropperComponent } from './image-cropper.component';


@NgModule({
  declarations: [
    ImageCropperComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixImageCropperComponentModule,
    ImageCropperRoutingModule
  ]
})
export class ImageCropperPageModule { }
