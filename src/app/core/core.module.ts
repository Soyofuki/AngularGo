import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExceptionLoggingService } from './logging/exception-logging.service';
import { NavComponent } from './nav/nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutComponent } from './layout/layout.component';
import { AppInsightsMonitoringService } from './logging/app-insights-monitoring.service';
import { TrackableComponent } from './logging/trackable.component';
import { MenuService } from './menu.service';
import { FooterComponent } from './footer/footer.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatMenuModule, MatButtonToggleModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSnackBarModule, MatSliderModule, MatSlideToggleModule, MatTableModule, MatSortModule, MatTabsModule, MatTooltipModule, MatTreeModule, MatAutocompleteModule, MatBottomSheetModule, MatBadgeModule, MatCardModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatInputModule, MatButtonModule } from '../../../node_modules/@angular/material';


@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    ToolbarComponent,
    TrackableComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    LayoutComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: ExceptionLoggingService },
    AppInsightsMonitoringService,
    MenuService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
