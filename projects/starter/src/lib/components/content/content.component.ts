import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nguix-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnChanges {

  /**
   * Input() Url to content or full content
   */
  @Input() input?: string = '';

  /**
   * Output() Content from text ready
   */
  @Output() ready: EventEmitter<void> = new EventEmitter();

  /**
   * Output() Finish loading content from url
   */
  @Output() load: EventEmitter<any> = new EventEmitter();

  /**
   * Output() Loading content from url failed
   */
  @Output() error: EventEmitter<any> = new EventEmitter();

  /**
   * @ignore
   */
  isExternal = false;

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  ngOnChanges() {
    this.isExternal = (this.input || '').substr(0, 4) === 'http';
  }
}
