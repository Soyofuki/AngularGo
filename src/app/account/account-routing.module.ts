import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmailConfirmationComponent } from "./email-confirmation/email-confirmation.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "registration" },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "email_confirmation/:userId/:code", component: EmailConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
