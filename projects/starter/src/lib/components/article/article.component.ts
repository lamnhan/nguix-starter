import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nguix-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
