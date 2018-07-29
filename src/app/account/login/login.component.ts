import { Component, OnInit } from "@angular/core";
import { AccountService } from "../account.service";

export class LoginUser {
  constructor(
    public email: string,
    public password: string
  ) {  }
}

@Component({
  selector: "app-account-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  model = new LoginUser('', '');

  constructor(private accountService: AccountService) {}

  ngOnInit() {

  }

  submitted = false;

  onSubmit() {
    if (this.model.password) {
      this.submitted = true;
      this.accountService.login(this.model.email, this.model.password);
    }
  }

}
