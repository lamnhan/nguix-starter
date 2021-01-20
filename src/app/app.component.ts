import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  mainMenuItems = [
    {
      text: 'Components',
      routerLink: ['/components'],
      subItems: [
        {
          text: 'Header',
          routerLink: ['/component/header']
        },
        {
          text: 'Footer',
          routerLink: ['/component/footer']
        }
      ]
    },
    {
      text: 'Donate',
      routerLink: ['/donate']
    },
    {
      text: 'Help',
      routerLink: ['/help']
    }
  ];

  constructor() {}

}
