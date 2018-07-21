import { Component, ReflectiveInjector } from '@angular/core';
import { AppInsightsMonitoringService } from './app-insights-monitoring.service';

@Component({
  template: ''
})
export class TrackableComponent {

  private appInsightsMonitoringService: AppInsightsMonitoringService;

  constructor() {
    // Manually retrieve the monitoring service from the injector
    // so that constructor has no dependencies that must be passed in from child
    const injector = ReflectiveInjector.resolveAndCreate([
      AppInsightsMonitoringService
    ]);
    this.appInsightsMonitoringService = injector.get(AppInsightsMonitoringService);
    this.logNavigation();
  }

  private logNavigation() {
    this.appInsightsMonitoringService.logPageView();
  }

}

