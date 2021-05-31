import { Component, OnInit, Input, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-compbody',
  templateUrl: './compbody.component.html',
  styleUrls: ['./compbody.component.scss']
})
export class CompbodyComponent implements OnInit {
  @Input() apiSrc?: string;
  @Input() importName?: string = '...';
  @Input() componentTemplate?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {}

  getUsageContent(el: any) {
    const rawCode = el.innerHTML
      .replace(/( _ng).*?("")/g, '');
    console.log(rawCode);
    const code = '<nguix-footer></nguix-footer>';
    return `
Import the module:
\`\`\`ts
import {${this.importName}} from '@lamnhan/nguix-starter';
@NgModule({ imports: [${this.importName}] })
\`\`\`

Use the component:
\`\`\`html
${code}
\`\`\`
`;
  }

}
