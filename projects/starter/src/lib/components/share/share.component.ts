import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  /**
   * Input() Share title
   */
  @Input() title?: string;

  /**
   * Input() The text to share
   */
  @Input() text?: string;

  /**
   * Input() The url to share
   */
  @Input() url?: string;

  constructor(
    /**
     * Inject() Requires the [AppService](https://ngx-useful.lamnhan.com/service/app)
     */
    public readonly appService: AppService
  ) { }

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  share() {
    return this.appService.share(
      this.title || 'Share',
      this.text || 'This is sommething!',
      this.url || 'https://lamnhan.com',
    );
  }
}
