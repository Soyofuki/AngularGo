import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatBottomSheetModule,
  MatBadgeModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTableModule,
  MatSortModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HelpComponent } from "./help/help.component";
import { CdkTableModule } from "../../../node_modules/@angular/cdk/table";
import { CdkTreeModule } from "../../../node_modules/@angular/cdk/tree";

@NgModule({
  declarations: [PageNotFoundComponent, HelpComponent],
  imports: [CommonModule],
  exports: [
    CommonModule,
    PageNotFoundComponent,
    HelpComponent,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule
  ]
})
export class SharedModule {}
