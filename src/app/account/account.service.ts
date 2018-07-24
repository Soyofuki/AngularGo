import { Injectable } from "@angular/core";

import { HttpHeaders, HttpClient } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "application/json",
    "Accept": "*/*"
  })
};
@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    const postedData = {
      Email: email,
      Password: password,
      ConfirmPassword: password
    };
    return this.http
      .post(
        "https://*.azurewebsites.net/api/Account/Register",
        postedData,
        httpOptions
      )
      .subscribe(
        result => {
          console.log(result);
          alert("Successful");
        },
        error => console.log("There was an error.")
      );
  }
}
