import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export class User {
  constructor(
    public email: string,
    public password: string,
    public passwordConfirmation: string
  ) {  }
}

@Component({
  selector: "app-account-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  userId: string;
  code: string;


  model = new User('', '', '');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

  }

  submitted = false;

  onSubmit() { this.submitted = true; }

}
