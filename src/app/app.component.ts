import { Component } from '@angular/core';
import { AppService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  footerSocialItems = [
    {
      icon: 'https://img.icons8.com/color/48/000000/new-post.png',
      classes: 'email',
      href: '#',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/phone.png',
      classes: 'phone',
      href: '#',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/facebook.png',
      classes: 'facebook',
      href: '#',
    },
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
