import { Component, OnInit, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { FetchService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-splashbody',
  templateUrl: './splashbody.component.html',
  styleUrls: ['./splashbody.component.scss']
})
export class SplashbodyComponent implements OnInit {
  @Input() splashscreenUrl!: string;
  @Input() name = '';
  
  usageContent = '';

  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    this.fetchService
      .get(this.splashscreenUrl, undefined, false)
      .pipe(take(1))
      .subscribe(htmlCode => {
        // extract content
        const a = (htmlCode as string).indexOf('<body>') + 6;
        const z = (htmlCode as string).indexOf('</body>');
        htmlCode = (htmlCode as string).substring(a, z);
        // set usage

        this.usageContent =
`
I. Include SCSS and JS in \`angular.json\`:

\`\`\`json
{
  "styles" [
    "node_modules/lamnhan/nguix-starter/splashscreens/${this.name}/index.scss"
  ],
  "scripts": [
    "node_modules/lamnhan/nguix-starter/splashscreens/${this.name}/index.js"
  ]
}
\`\`\`

Or, imports CSS and JS in \`index.html\`:

\`\`\`html
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/nguix-starter@latest/splashscreens/${this.name}/index.css">
<script defer src="https://unpkg.com/@lamnhan/nguix-starter@latest/splashscreens/${this.name}/index.js"></script>
\`\`\`

II. (Optional) Prerender ([@lamnhan/ngxer](https://ngxer.lamnhan.com)) no script and translations:

\`\`\`html
<noscript><style>#app-splash-screen{display: none !important;}</style></noscript>
<style>#app-splash-screen.en-US .only.en-US {display: inline-block !important;}</style>
\`\`\`

III. Includes the template, after \`<app-root></app-root>\`:
\`\`\`html
${htmlCode}
\`\`\``;
    });
  }

}
