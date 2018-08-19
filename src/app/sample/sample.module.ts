import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleLayoutComponent } from './sample-layout/sample-layout.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SampleRoutingModule
  ],
  exports: [],
  declarations: [SampleLayoutComponent],
  providers: []
})
export class SampleModule {}
