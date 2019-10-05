import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleLayoutComponent } from './sample-layout/sample-layout.component';
import { SampleAuthGuardComponent } from './sample-auth-guard/sample-auth-guard.component';
import { SampleListComponent } from './sample-list/sample-list.component';
import { SampleService } from './sample.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SampleRoutingModule
  ],
  exports: [],
  declarations: [
    SampleLayoutComponent,
    SampleAuthGuardComponent,
    SampleListComponent
  ],
  providers: [
    SampleService
  ]
})
export class SampleModule { }
