import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nguix-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() content?: string;
  @Input() contentSrc?: string;

  @Output() ready: EventEmitter<void> = new EventEmitter();
  @Output() load: EventEmitter<any> = new EventEmitter();
  @Output() error: EventEmitter<any> = new EventEmitter();

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}
