import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  installContent =
`Install theming, [@lamnhan/unistylus](https://unistylus.lamnhan.com):
\`\`\`sh
npm install -S @lamnhan/unistylus@0.0.7
\`\`\`

Install data models, [@lamnhan/schemata](https://schemata.lamnhan.com):
\`\`\`sh
npm install -S @lamnhan/schemata@0.0.7
\`\`\`

Install utilities, [@lamnhan/ngx-useful](https://ngx-useful.lamnhan.com):
\`\`\`sh
npm install -S @lamnhan/ngx-useful@0.0.8
\`\`\`

Install NGUIX library, [@lamnhan/nguix-starter](/):
\`\`\`sh
npm install -S @lamnhan/nguix-starter@0.0.5
\`\`\``;

  usageContent =
`Use a component:
\`\`\`ts
// import the module --> app.module.ts
import { NguixHeaderComponentModule } from '@lamnhan/nguix-starter';
\`\`\`

\`\`\`html
<!-- use the component ~~> app.component.html -->
<nguix-header></nguix-header>
\`\`\`

Use a page:
\`\`\`ts
// define a route --> app-routing.module.ts
const routes: Routes = [
  { path: '**', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixOopsPageModule) },
];
\`\`\``;

  constructor() { }

  ngOnInit(): void {
  }

}
