import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nguix-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  /**
   * Input() The icon class
   */
  @Input() base = 'icon';

  /**
   * Input() Built-in icon packs
   */
  @Input() pack = 'bootstrap';

  /**
   * Input() The icon name from a pack
   */
  @Input() name?: string;

  /**
   * Input() Or direct icon url
   */
  @Input() url?: string;

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
