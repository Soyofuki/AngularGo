import { Injectable } from "@angular/core";

import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  })
};

const baseUrl: string = environment.baseUrl;

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    const body = `Email=${email}&Password=${password}&ConfirmPassword=${password}`;
    return this.http
      .post(
        baseUrl + "/api/Account/Register",
        body,
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

  confirmEmail(userId: string, code: string) {
    return this.http.get(
      baseUrl + "/api/Account/ConfirmEmail?userId=" +
        userId +
        "&code=" +
        encodeURIComponent(code),
      httpOptions
    );
  }

  login(email: string, password: string) {
    const body = `grant_type=password&username=${email}&password=${password}`;
    return this.http.post(baseUrl + "/Token", body, httpOptions).subscribe(
      result => {
        console.log(result);
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ token: result, name: result["userName"] })
        );
        alert("Successful");
      },
      error => console.log("There was an error.")
    );
  }
}
