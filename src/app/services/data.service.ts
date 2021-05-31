import { Injectable } from '@angular/core';
import { NavItem } from '@lamnhan/ngx-useful';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // guides
  guideMenu: NavItem[] = [
    {
      text: 'Introduction',
      level: 1,
      routerLink: ['guide', 'introduction']
    },
  ];

  // components
  componentMenu: NavItem[] = [
    {
      text: 'Header',
      level: 1,
      routerLink: ['component', 'header']
    },
    {
      text: 'Header 2nd',
      level: 1,
      routerLink: ['component', 'header2nd']
    },
    {
      text: 'Footer',
      level: 1,
      routerLink: ['component', 'footer']
    },
  ];

  // templates
  templateMenu: NavItem[] = [
    {
      text: 'Blog',
      level: 1,
      routerLink: ['template', 'blog']
    },
    {
      text: 'Shop',
      level: 1,
      routerLink: ['template', 'shop']
    },
  ];

  constructor() { }
}
