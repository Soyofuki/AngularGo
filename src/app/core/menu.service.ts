import { Injectable } from '@angular/core';
import { NavItem } from './layout/layout.component';

@Injectable()
export class MenuService {
  getSideNavMenu(): NavItem[] {
    const items: NavItem[] = [
      {
        name: 'Home',
        routerLink: 'home',
        subItems: null,
        icon: 'home'
      },
      {
        name: 'Sample',
        routerLink: 'sample',
        subItems: [
          { name: 'Sample Layout', routerLink: 'sample/sample-layout', subItems: null, icon: 'home' },
          { name: 'Sample List', routerLink: 'sample/sample-list', subItems: null, icon: 'home' },
          { name: 'Sample Auth Guard', routerLink: 'sample/sample-auth-guard', subItems: null, icon: 'home' }
        ],
        icon: 'home'
      },
      {
        name: 'Help',
        routerLink: 'help',
        subItems: null,
        icon: 'help'
      },
      {
        name: 'Account',
        routerLink: 'account',
        subItems: [
          {
            name: 'Register',
            routerLink: 'account/registration',
            subItems: null,
            icon: 'account'
          },
          { name: 'Login', routerLink: 'account/login', subItems: null, icon: 'account' }
        ],
        icon: 'account'
      }
    ];
    return items;
  }
}
