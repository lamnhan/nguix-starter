import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nguix-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  /**
   * Input() Content from text
   */
  @Input() content?: string;

  /**
   * Input() Content from url
   */
  @Input() contentSrc?: string;

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

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}
