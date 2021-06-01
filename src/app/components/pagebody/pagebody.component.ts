import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagebody',
  templateUrl: './pagebody.component.html',
  styleUrls: ['./pagebody.component.scss']
})
export class PagebodyComponent implements OnInit {
  @Input() pageUrl = '/oops';
  @Input() importName = '...';
  
  usageContent = '';

  constructor() { }

  ngOnInit(): void {
    this.usageContent =
`
Use the page directly:
\`\`\`ts
{ path: 'path/to/page', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.${this.importName}) }
\`\`\`

Or, through a proxy:
\`\`\`ts
// import the page module
import {${this.importName}} from '@lamnhan/nguix-starter';
// create a proxy
@NgModule({ imports: [${this.importName}] }) ${this.importName}WrapperModule {}
// add the route
{ path: 'path/to/page', loadChildren: () => import('./path/to/proxy/module').then(m => m.${this.importName}WrapperModule) }
\`\`\``;
  }

}
