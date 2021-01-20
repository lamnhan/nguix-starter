import { Component, Input, Output, EventEmitter } from '@angular/core';

type MobileMenuModes = 'default' | 'sidebar' | 'modal';

type ExtraButtons = string | 'switch' | BuiltinExtraIcons | ListingExtra;

type BuiltinExtraIcons = 'more' | 'down' | 'add' | 'send';

interface ListingExtra {
  icon?: string;
  text?: string;
  type?: 'menu' | 'select' | 'checkbox' | 'radio';
  items: MenuItem[];
}

export interface MenuItem {
  link?: string;
  routerLink?: string | string[];
  id?: string; // for extra items
  text?: string; // main
  icon?: string; // social, links, ...
  subItems?: MenuItem[];
}

@Component({
  selector: 'ln-header-raw',
  templateUrl: './header-raw.component.html',
  styleUrls: ['./header-raw.component.scss']
})
export class HeaderRawComponent {

  // brand
  @Input() logo: undefined | string;
  @Input() title = 'Welcome!';

  // menu
  @Input() menuItems: MenuItem[] = [];
  @Input() menuButtons: undefined | MenuItem[];
  @Input() mobileMenuMode: MobileMenuModes = 'default';

  // search
  @Input() searchBar: undefined | true | 'collapsed';
  @Input() searchPlaceholder = 'Looking for something?';
  @Output() search: EventEmitter<string> = new EventEmitter();

  // extra
  @Input() extraButton: undefined | ExtraButtons;
  @Output() extra: EventEmitter<{ $event: any; extraButton: ExtraButtons }> = new EventEmitter();

  mobileMenuExpanded = true;

  constructor() {}

  getExtraButtonIcon(extraButton: string | BuiltinExtraIcons) {
    const icons: {[name in BuiltinExtraIcons]: string} = {
      more: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAS0lEQVRIie3SQQqAMAwEwMHXWfz/B1r/YQ/1XhFDD2Ygx5ANLOlDB040lIgDDdc99enSFpHkrWJ8UbEvzvJXWdOprOl6WdOprGmMDn+wGWPWgRNhAAAAAElFTkSuQmCC',
      down: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA50lEQVRIie3UPUoDQRjG8Z8WwUKwEbTfA1hZauUVUtp6Ba/gHSztBQtLtYmQFJ4hjY2BlCEgkrVwkGXc7I5mGmH+8DbD+zzPfFMoFAqZeMQLqoyeVfB86GqqQ81xliH0FLOGb29wjQ9cbhB6gffIcy3jqLHGNQa/CBwETewz7hLt4rZF9IzDhNB9PLXo77HXJ97ytcWrSPyK4w7dEaaRZoUrbCdM+pshFpHREucb9ibRt4q/7k4SBxj5eW53oeLxUdBkYd1NjesGO7lCm7S9zRxvPokTvDVCc/1ySVSYhMr5rxcKhX/EJz8gazIttX7QAAAAAElFTkSuQmCC',
      add: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAMklEQVRIiWNgGGngPxQTDZho5JBRC0YtGEoWMCKxScpAxJpNcx+QCkaLilELRi0YkQAArMYFIENGFBoAAAAASUVORK5CYII=',
      send: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABF0lEQVRIie3UoUoEURSA4Q/FIPgEKr6AYDFYzPoEthUfwaBxg1VMRoNl9g3cpFaLybJBk0mDYBEFZVnW4F0Yhzt3Z3emCB44DPfc4f/PPTNc/uN3LGIf501C57GDLvoY4qAudAabOMNbgI5ygKVpwas4wmMBms/LSaGjud6UAPu4z61bVaCxucbyNZzoK6zfsVAGTc01lg/YxkuulqW6zipAR9n18yF7hfrWuLFcV4CfYg4XhfoTZlOCcZJP7IX3jiP7J+PgKckzNsJ+q6SBtaqCouQOK6G+jo8IvDcJPC9phycsh5PEuj+cRlCU3ZbAB0FeK9ol8CGu6sJJ/127TQjKJMmroQlJp0l4TJK8GupKMhWuhr8f31qxmrBncPNaAAAAAElFTkSuQmCC',
    };
    return icons[extraButton as BuiltinExtraIcons] || extraButton;
  }

}
