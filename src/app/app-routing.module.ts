import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { HelpComponent } from "./shared/help/help.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  { path: "sample", loadChildren: "./sample/sample.module#SampleModule" },
  { path: "help", component: HelpComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
