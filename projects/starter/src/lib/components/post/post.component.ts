import { Component, OnInit, Input } from '@angular/core';
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
