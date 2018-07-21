import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports: [
  ],
  declarations: [
    DashboardComponent
  ],
  providers: []
})
export class HomeModule { }
