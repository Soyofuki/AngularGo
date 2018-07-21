import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public userName: string;
  public title: string;

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {

  }

}
