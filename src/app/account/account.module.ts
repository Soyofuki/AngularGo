import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { EmailConfirmationComponent } from "./email-confirmation/email-confirmation.component";
import { AccountRoutingModule } from "./account-routing.module";
import { RegistrationComponent } from "./register/registration.component";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AccountRoutingModule
  ],
  exports: [],
  declarations: [EmailConfirmationComponent, RegistrationComponent],
  providers: []
})
export class AccountModule {}
