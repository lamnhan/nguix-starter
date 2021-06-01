import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-splashbody',
  templateUrl: './splashbody.component.html',
  styleUrls: ['./splashbody.component.scss']
})
export class SplashbodyComponent implements OnInit {
  @Input() splashscreenUrl!: string;
  @Input() name = '';
  
  usageContent = '';

  constructor() { }

  ngOnInit(): void {
    this.usageContent =
`
Import the assets:
\`\`\`html
<!-- In-app splashscreen -->
<link rel="stylesheet" href="${this.name}/index.css">
<script defer src="${this.name}/index.js"></script>
\`\`\`

Provide the template:
\`\`\`html
<!-- put this after app-root -->
...
\`\`\``;
  }

}
