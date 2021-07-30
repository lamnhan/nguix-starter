import { Component, OnInit } from '@angular/core';
import * as Croppie from 'croppie';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-image-cropper-page',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {

  cropperOptions: Croppie.CroppieOptions = {
    viewport: {
      width: 120,
      height: 120,
      type: 'circle'
    },
    boundary: {
      width: 250,
      height: 250,
    },
    showZoomer: true,
  };

  constructor(public readonly data: DataService) {}

  ngOnInit(): void {}

}
