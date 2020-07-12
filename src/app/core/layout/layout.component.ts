import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { TranslateService } from '../translate.service';

export interface NavItem {
  name: string;
  routerLink: string;
  subItems: NavItem[];
  icon: string;
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

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private menuService: MenuService,
    private router: Router,
    private translate: TranslateService) {
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

  setLanguage() {
    switch (localStorage.getItem('locale')) {
      case 'en':
        this.translate.use('ja');
        break;
      case 'ja':
        this.translate.use('zh-Hans');
        break;
      case 'zh-Hans':
        this.translate.use('en');
        break;
      default:
        this.translate.use('en');
        break;
    }
  }
}
