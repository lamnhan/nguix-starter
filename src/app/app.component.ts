import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '@lamnhan/ngx-useful';

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

  constructor(private appService: AppService) {}

  switchTheme(e: unknown) {
    return this.appService.changeTheme(
      (e as {$event: {target: {checked: boolean}}}).$event.target.checked
      ? 'dark'
      : 'default'
    );
  }
}
