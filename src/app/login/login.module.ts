import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "./../shared/shared.module";
import { EmailConfirmationComponent } from "./email-confirmation/email-confirmation.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, SharedModule, LoginRoutingModule],
  exports: [],
  declarations: [EmailConfirmationComponent],
  providers: []
})
export class LoginModule {}
