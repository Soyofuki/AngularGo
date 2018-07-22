import { Component, OnInit } from "@angular/core";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  tiles: Tile[] = [
    { text: "Layout", cols: 3, rows: 1, color: "#c2185b" },
    { text: "Form", cols: 1, rows: 2, color: "#c2185b" },
    { text: "Table", cols: 1, rows: 1, color: "#c2185b" },
    { text: "Popup", cols: 2, rows: 1, color: "#c2185b" }
  ];

  constructor() {}

  ngOnInit() {}
}
