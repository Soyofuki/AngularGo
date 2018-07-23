import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmailConfirmationComponent } from "./email-confirmation/email-confirmation.component";

const routes: Routes = [{ path: "email_confirmation/:userId/:code", component: EmailConfirmationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
