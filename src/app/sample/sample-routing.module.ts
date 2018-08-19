import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleLayoutComponent } from './sample-layout/sample-layout.component';

const routes: Routes = [{ path: '', component: SampleLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule {}
