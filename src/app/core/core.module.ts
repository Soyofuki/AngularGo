import { NgModule, Optional, SkipSelf, ErrorHandler, APP_INITIALIZER } from '@angular/core';
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
import { TranslateService } from './translate.service';
import { SharedModule } from '../shared/shared.module';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use(localStorage.getItem('locale'));
}
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
    MatMenuModule,
    SharedModule
  ],
  exports: [LayoutComponent],
  providers: [
    { provide: ErrorHandler, useClass: ExceptionLoggingService },
    AppInsightsMonitoringService,
    MenuService,
    AuthGuard,
    AuthService,
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }
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
