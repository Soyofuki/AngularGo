import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

export interface NavItem {
  name: string;
  routerLink: string;
  subItems: NavItem[];
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  title = 'Welcome';
  loading = false;

  mobileQuery: MediaQueryList;
  items: NavItem[];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private menuService: MenuService
    , private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.items = this.menuService.getSideNavMenu();
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  navigate(title: string, routeLink: string, sidenav: MatSidenav) {
    this.title = title;
    this.router.navigate([routeLink]);
    if (this.mobileQuery.matches) {
      sidenav.toggle();
    }
  }
}
