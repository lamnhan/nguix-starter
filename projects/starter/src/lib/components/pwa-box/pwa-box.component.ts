import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {PwaService} from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-pwa-box',
  templateUrl: './pwa-box.component.html',
  styleUrls: ['./pwa-box.component.scss']
})
export class PwaBoxComponent implements OnInit {
  @Input() i18n = false;

  @Input() pwaService!: PwaService;
  @Input() title = 'Install app?';
  @Input() icon = '/assets/images/logo.svg';
  @Input() name = 'Install now';
  @Input() tagline = 'Add app to your home screen';

  @Output() action: EventEmitter<void> = new EventEmitter();
  @Output() dismiss: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
