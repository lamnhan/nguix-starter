import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '@lamnhan/schemata';
import { NavService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() The post
   */
  @Input() post!: Post;

  /**
   * Input() Author url segment
   */
  @Input() authorUrlSegment?: string;
  
  /**
   * Input() Category url segment
   */
   @Input() categoryUrlSegment?: string;

  /**
   * Input() Minute to read text. For i18n: `NGUIX_POST.MIN_READ`
   */
  @Input() MIN_READ = 'min read';

  /**
   * Input() TLDR title. For i18n: `NGUIX_POST.TLDR_TITLE`
   */
  @Input() TLDR_TITLE = 'Long story short';

  /**
   * Input() TOC title. For i18n: `NGUIX_POST.TOC_TITLE`
   */
  @Input() TOC_TITLE = 'In this post';

  /**
   * Input() When content is ready
   */
  @Output() contentReady = new EventEmitter<HTMLElement>();

  constructor(
    /**
     * Inject() Requires the [NavService](https://ngx-useful.lamnhan.com/service/nav)
     */
    public readonly navService: NavService
  ) { }

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
