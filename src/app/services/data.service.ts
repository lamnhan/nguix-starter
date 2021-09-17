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
      {
        text: 'Contribution',
        level: 1,
        routerLink: ['guide', 'contribution']
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
        text: 'Tabs',
        level: 1,
        routerLink: ['component', 'tabs']
      },
      {
        text: 'Footer',
        level: 1,
        routerLink: ['component', 'footer']
      },
    {
      text: 'Content',
      level: 0,
    },
      {
        text: 'Posts',
        level: 1,
        routerLink: ['component', 'posts']
      },
      {
        text: 'Post',
        level: 1,
        routerLink: ['component', 'post']
      },
      {
        text: 'Videos',
        level: 1,
        routerLink: ['component', 'videos']
      },
      {
        text: 'Skeleton videos',
        level: 1,
        routerLink: ['component', 'skeleton-videos']
      },
      {
        text: 'Video',
        level: 1,
        routerLink: ['component', 'video']
      },
      {
        text: 'Skeleton video',
        level: 1,
        routerLink: ['component', 'skeleton-video']
      },
    {
      text: 'User',
      level: 0,
    },
      {
        text: 'Login',
        level: 1,
        routerLink: ['component', 'login']
      },
      {
        text: 'Register',
        level: 1,
        routerLink: ['component', 'register']
      },
      {
        text: 'Account',
        level: 1,
        routerLink: ['component', 'account']
      },
    {
      text: 'Misc',
      level: 0,
    },
      {
        text: 'Oops',
        level: 1,
        routerLink: ['component', 'oops']
      },
      {
        text: 'Spinner',
        level: 1,
        routerLink: ['component', 'spinner']
      },
      {
        text: 'Icon',
        level: 1,
        routerLink: ['component', 'icon']
      },
      {
        text: 'Content',
        level: 1,
        routerLink: ['component', 'content']
      },
      {
        text: 'Share',
        level: 1,
        routerLink: ['component', 'share']
      },
      {
        text: 'Video Player',
        level: 1,
        routerLink: ['component', 'video-player']
      },
      {
        text: 'Image Cropper',
        level: 1,
        routerLink: ['component', 'image-cropper']
      },
      {
        text: 'Network Indicator',
        level: 1,
        routerLink: ['component', 'network-indicator']
      },
      {
        text: 'Nav Indicator',
        level: 1,
        routerLink: ['component', 'nav-indicator']
      },
      {
        text: 'PWA Box',
        level: 1,
        routerLink: ['component', 'pwa-box']
      },
      {
        text: 'PWA Reminder',
        level: 1,
        routerLink: ['component', 'pwa-reminder']
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
      {
        text: 'Setting',
        level: 1,
        routerLink: ['page', 'setting']
      },
    {
      text: 'Others',
      level: 0,
    },
      {
        text: 'Oauth Popup',
        level: 1,
        routerLink: ['page', 'oauth-popup']
      },
  ];

  // splashscreen
  splashscreenMenu: NavItem[] = [
    {
      text: 'Logo',
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

  constructor() { }
}
