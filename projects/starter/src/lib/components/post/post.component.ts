import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@lamnhan/schemata';
import { NavService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-post',
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
