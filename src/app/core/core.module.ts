import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExceptionLoggingService } from './logging/exception-logging.service';
import { LayoutComponent } from './layout/layout.component';
import { AppInsightsMonitoringService } from './logging/app-insights-monitoring.service';
import { MenuService } from './menu.service';
import { FooterComponent } from './footer/footer.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard';

@NgModule({
  declarations: [LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [LayoutComponent],
  providers: [
    { provide: ErrorHandler, useClass: ExceptionLoggingService },
    AppInsightsMonitoringService,
    MenuService,
    AuthGuard,
    AuthService
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
