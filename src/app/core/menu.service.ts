import { Injectable } from '@angular/core';
import { NavItem } from './layout/layout.component';

@Injectable()
export class MenuService {
  getSideNavMenu(): NavItem[] {
    const items: NavItem[] = [
      {
        name: 'Home',
        routerLink: 'home',
        subItems: null
      },
      {
        name: 'Sample',
        routerLink: 'sample',
        subItems: [
          { name: 'Sample Layout', routerLink: 'sample/sample-layout', subItems: null },
          { name: 'Sample List', routerLink: 'sample/sample-list', subItems: null },
          { name: 'Sample Auth Guard', routerLink: 'sample/sample-auth-guard', subItems: null }
        ]
      },
      {
        name: 'Help',
        routerLink: 'help',
        subItems: null
      },
      {
        name: 'Account',
        routerLink: 'account',
        subItems: [
          {
            name: 'Register',
            routerLink: 'account/registration',
            subItems: null
          },
          { name: 'Login', routerLink: 'account/login', subItems: null }
        ]
      }
    ];
    return items;
  }
}
