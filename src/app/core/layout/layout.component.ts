import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

export interface NavItem {
  name: string;
  routerLink: string;
  subItems: NavItem[];
}

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  loading = false;

  mobileQuery: MediaQueryList;

  items: NavItem[] = [
    {
      name: "Home", routerLink: "home", subItems: null
    },
    {
      name: "Sample", routerLink: "sample",
      subItems: [
        { name: "Sample1", routerLink: "sample1", subItems: null },
        { name: "Sample2", routerLink: "sample2", subItems: null }
      ]
    },
    {
      name: "Help", routerLink: "help", subItems: null
    }
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
