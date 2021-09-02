import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { FetchService } from '@lamnhan/ngx-useful';

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

  /**
   * @ignore
   */
  googleDoc?: Observable<string>;

  constructor(
    /**
     * Inject() Requires the [FetchService](https://ngx-useful.lamnhan.com/service/fetch)
     */
    public fetchService: FetchService
  ) {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  ngOnChanges() {
    if ((this.input || '').indexOf('docs.google.com') !== -1) {
      this.googleDoc = this.fetchService
        .get<string>(this.input as string, undefined, false)
        .pipe(
          catchError(() => of('')),
          map(result => {
            const content = !result ? '' : result;
            const startAt = content.indexOf('</head>');
            const endAt = content.indexOf('</body>');
            return content
              .substring(startAt + 7, endAt)
              .replace(/<body(.*?)>/, '');
          }),
          tap(console.log),
        );
    } else {
      this.isExternal = (this.input || '').substr(0, 4) === 'http';
    }
  }
}
