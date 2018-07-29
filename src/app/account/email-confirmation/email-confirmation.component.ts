import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-email-confirmation",
  templateUrl: "./email-confirmation.component.html",
  styleUrls: ["./email-confirmation.component.scss"]
})
export class EmailConfirmationComponent implements OnInit {
  userId: string;
  code: string;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      (this.userId = params["userId"]), (this.code = params["code"]);
    });
    this.accountService.confirmEmail(this.userId, this.code).subscribe(
      result => {
        console.log(result);
        alert("Successful");
      },
      error => console.log("There was an error.")
    );
  }
}
