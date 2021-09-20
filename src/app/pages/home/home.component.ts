import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  installContent =
`Install theming, [@unistylus/core](https://unistylus.lamnhan.com):
\`\`\`sh
npm i @unistylus/{core,bootstrap}
\`\`\`

Install data models, [@lamnhan/schemata](https://schemata.lamnhan.com):
\`\`\`sh
npm i @lamnhan/{schemata,ngx-schemata}
\`\`\`

Install utilities, [@lamnhan/ngx-useful](https://ngx-useful.lamnhan.com):
\`\`\`sh
npm i @lamnhan/ngx-useful
\`\`\`

Install NGUIX library:
\`\`\`sh
npm i @lamnhan/nguix-starter
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

  ngOnInit(): void {}

}
