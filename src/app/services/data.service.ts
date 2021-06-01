import { Injectable } from '@angular/core';
import { NavItem, MenuItem } from '@lamnhan/ngx-useful';

interface TemplateItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  exampleMenuItems: MenuItem[] = [
    { text: 'Link 1', routerLink: ['link-1'] },
    { text: 'Link 2', routerLink: ['link-2'] },
    { text: 'Link 3', href: 'https://lamnhan.com', target: '_blank' },
  ];
  
  templateItems: Record<string, TemplateItem> = {
    blog: {
      id: 'blog',
      title: 'Blog',
      description: 'General bloging template',
      thumbnail: 'http://source.unsplash.com/3GZNPBLImWc/768x480',
    },
    shop: {
      id: 'shop',
      title: 'Shop',
      description: 'Online shoping template',
      thumbnail: 'http://source.unsplash.com/c9FQyqIECds/768x480',
    },
  };

  // guides
  guideMenu: NavItem[] = [
    {
      text: 'Getting started',
      level: 0
    },
      {
        text: 'Introduction',
        level: 1,
        routerLink: ['guide', 'introduction']
      },
  ];

  // components
  componentMenu: NavItem[] = [
    {
      text: 'Layout',
      level: 0,
    },
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

  // pages
  pageMenu: NavItem[] = [
    {
      text: 'General',
      level: 0,
    },
      {
        text: 'Oops',
        level: 1,
        routerLink: ['page', 'oops']
      },
      {
        text: 'Terms',
        level: 1,
        routerLink: ['page', 'terms']
      },
      {
        text: 'Privacy',
        level: 1,
        routerLink: ['page', 'privacy']
      },
  ];

  // splashscreen
  splashscreenMenu: NavItem[] = [
    {
      text: 'Basic',
      level: 0,
    },
      {
        text: 'Still',
        level: 1,
        routerLink: ['splashscreen', 'still']
      },
      {
        text: 'Heartbeat',
        level: 1,
        routerLink: ['splashscreen', 'heartbeat']
      },
      {
        text: 'Bouncing',
        level: 1,
        routerLink: ['splashscreen', 'bouncing']
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
