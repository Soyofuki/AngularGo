import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

export class User {
  constructor(
    public email: string,
    public password: string,
    public confirmPassword: string
  ) {}
}

@Component({
  selector: 'app-account-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  model = new User('', '', '');

  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  submitted = false;

  onSubmit() {
    if (this.model.password == this.model.confirmPassword) {
      this.submitted = true;
      this.accountService.register(this.model.email, this.model.password);
    }
  }
}
