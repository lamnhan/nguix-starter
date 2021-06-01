import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  exampleContent =
`
Display HTML or Markdown from text or file.

Including code blocks:

\`\`\`html
<h1>Hello, world!</h1>
<p>Some HTML code.</p>
\`\`\`

\`\`\`css
.foo {
  content: 'Some CSS here.';
  color: green;
  margin: 1rem;
}
\`\`\`

\`\`\`ts
const foo = 'And, some Typescript code.';
\`\`\``;

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

}
