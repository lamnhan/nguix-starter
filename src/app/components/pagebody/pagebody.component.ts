import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagebody',
  templateUrl: './pagebody.component.html',
  styleUrls: ['./pagebody.component.scss']
})
export class PagebodyComponent implements OnInit {
  @Input() apiSrc?: string;
  @Input() pageUrl = '/oops';
  @Input() importName = '...';
  
  usageContent = '';

  constructor() { }

  ngOnInit(): void {
    this.usageContent =
`
Use the page directly:
\`\`\`ts
// app-routing.module.ts
{ path: 'path/to/page', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.${this.importName}) }
\`\`\`

Or, through a proxy module:
\`\`\`ts
// wrapper.module.ts
import { ${this.importName} } from '@lamnhan/nguix-starter';
@NgModule({ imports: [${this.importName}] }) ${this.importName.replace('Module', '')}WrapperModule {}
\`\`\`

\`\`\`ts
// app-routing.module.ts
{ path: 'path/to/page', loadChildren: () => import('./path/to/wrapper.module').then(m => m.${this.importName.replace('Module', '')}WrapperModule) }
\`\`\``;
  }

}
