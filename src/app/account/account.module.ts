import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { EmailConfirmationComponent } from "./email-confirmation/email-confirmation.component";
import { AccountRoutingModule } from "./account-routing.module";
import { RegistrationComponent } from "./register/registration.component";
import { AccountService } from "./account.service";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AccountRoutingModule
  ],
  exports: [],
  declarations: [EmailConfirmationComponent, RegistrationComponent],
  providers: [AccountService]
})
export class AccountModule {}
