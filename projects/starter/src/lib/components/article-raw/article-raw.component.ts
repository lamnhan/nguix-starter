import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { Post } from '@lamnhan/schemata';

@Component({
  selector: 'nguix-article-raw',
  templateUrl: './article-raw.component.html',
  styleUrls: ['./article-raw.component.scss']
})
export class ArticleRawComponent implements OnInit {
  @Input() post?: Post;
  @Input() mdSupported = false;

  @Output() markdownReady: EventEmitter<unknown> = new EventEmitter();

  constructor(private markdownService: MarkdownService) {}

  ngOnInit(): void {
  }

  md2Html(md: string) {
    return this.markdownService.compile(md);
  }
}
