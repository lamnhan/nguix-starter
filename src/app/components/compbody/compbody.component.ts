import { Component, OnInit, Input, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-compbody',
  templateUrl: './compbody.component.html',
  styleUrls: ['./compbody.component.scss']
})
export class CompbodyComponent implements OnInit {
  @Input() componentTemplate?: TemplateRef<any>;
  @Input() apiSrc?: string;
  @Input() importName?: string = '...';
  @Input() htmlCode?: string;

  usageContent = '';

  constructor() { }

  ngOnInit(): void {
    this.usageContent = `
Import the module:
\`\`\`ts
import {${this.importName}} from '@lamnhan/nguix-starter';
@NgModule({ imports: [${this.importName}] })
\`\`\`

Use the component:
\`\`\`html
${this.htmlCode}
\`\`\`
`;
  }

}
