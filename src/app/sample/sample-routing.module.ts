import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleLayoutComponent } from './sample-layout/sample-layout.component';
import { SampleAuthGuardComponent } from './sample-auth-guard/sample-auth-guard.component';
import { AuthGuard } from '../core/auth-guard';
import { SampleListComponent } from './sample-list/sample-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sample-layout' },
  { path: 'sample-layout', component: SampleLayoutComponent },
  { path: 'sample-list', component: SampleListComponent, canActivate: [AuthGuard] },
  { path: 'sample-auth-guard', component: SampleAuthGuardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
