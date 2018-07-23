import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "../../../../node_modules/@angular/router";

@Component({
  selector: "app-login-email-confirmation",
  templateUrl: "./email-confirmation.component.html",
  styleUrls: ["./email-confirmation.component.scss"]
})
export class EmailConfirmationComponent implements OnInit {
  userId: string;
  code: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      (this.userId = params["userId"]), (this.code = params["code"]);
    });
  }
}
