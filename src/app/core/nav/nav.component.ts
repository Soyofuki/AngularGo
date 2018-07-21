import { Component, OnInit, NgZone } from '@angular/core';
import { MenuItem } from '../../shared/models/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


    items: Array<MenuItem>;

  constructor() {
  }

  ngOnInit() {

  }



}
