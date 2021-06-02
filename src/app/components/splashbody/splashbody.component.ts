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
Imports the assets:
\`\`\`html
<!-- In-app splashscreen -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/nguix-starter@latest/src/splashscreens/${this.name}/index.css">
<script defer src="https://unpkg.com/@lamnhan/nguix-starter@latest/src/splashscreens/${this.name}/index.js"></script>
\`\`\`

Includes the template:
\`\`\`html
<!-- <app-root></app-root> -->
${htmlCode}
\`\`\``;
    });
  }

}
