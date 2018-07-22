import { Component, OnInit } from "@angular/core";
import { Constants } from "./shared/models/constants";
import { AppInsightsMonitoringService } from "./core/logging/app-insights-monitoring.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  title = Constants.APP_NAME;
  isLogin = false;

  constructor(
    private appInsightsMonitoringService: AppInsightsMonitoringService
  ) {}

  ngOnInit() {}
}
