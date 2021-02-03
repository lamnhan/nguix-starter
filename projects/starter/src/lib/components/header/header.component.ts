import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProfile } from '@lamnhan/schemata';
import { NavMenuItem } from '@lamnhan/ngx-useful';

export type MobileMenuModes = 'simple' | 'sidebar' | 'modal';

export type ExtraButtons = string | 'switch' | ExtraBuiltinIcons | ExtraListing;

export type ExtraBuiltinIcons = 'more' | 'down' | 'add' | 'send';

export interface ExtraListing {
  icon?: string;
  text?: string;
  type?: 'menu' | 'select' | 'checkbox' | 'radio';
  items: NavMenuItem[];
}

export type HeaderIcons = 'menu' | 'search' | ExtraBuiltinIcons;

@Component({
  selector: 'nguix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // brand
  @Input() logo?: string;
  @Input() title = 'Welcome!';

  // menu
  @Input() menuItems: NavMenuItem[] = [];
  @Input() menuButtons?: NavMenuItem[];
  @Input() mobileMenuMode: MobileMenuModes = 'simple';

  // search
  @Input() searchBar?: true | 'collapsed';
  @Input() searchPlaceholder = 'Looking for something?';
  @Output() search: EventEmitter<string> = new EventEmitter();

  // user
  @Input() userProfile?: UserProfile;
  @Input() profileMenu: NavMenuItem[] = [];
  @Output() profile: EventEmitter<UserProfile> = new EventEmitter();

  // extra
  @Input() extraButton?: ExtraButtons;
  @Output() extra: EventEmitter<{ $event: unknown; extraButton: ExtraButtons }> = new EventEmitter();

  mobileMenuExpanded = true;

  constructor() {}

  ngOnInit(): void {}
}
