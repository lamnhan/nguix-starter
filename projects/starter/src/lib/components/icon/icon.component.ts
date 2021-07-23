import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nguix-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() base = 'icon';
  @Input() pack = 'bootstrap';
  @Input() name?: string;
  @Input() url?: string;

  constructor() {}

  ngOnInit(): void {}
}
