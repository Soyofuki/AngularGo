import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { AccountRoutingModule } from './account-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { AccountService } from './account.service';
import { LoginComponent } from './login/login.component';
import { MsalModule } from '@azure/msal-angular';
import { environment } from '../../environments/environment';

const webBaseUrl: string = environment.webBaseUrl;

export const protectedResourceMap: [string, string[]][] = [];

export function loggerCallback(logLevel, message, piiEnabled) {
  console.log('client logging' + message);
}

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AccountRoutingModule,
    MsalModule.forRoot({
      clientID: '',
      authority: 'https://login.microsoftonline.com/common/',
      validateAuthority: true,
      redirectUri: webBaseUrl + '/account/login',
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: isIE, // set to true for IE 11
      postLogoutRedirectUri: webBaseUrl + '/account/login',
      navigateToLoginRequestUrl: true,
      popUp: !isIE,
      consentScopes: null,
      unprotectedResources: ['https://www.microsoft.com/en-us/'],
      protectedResourceMap: protectedResourceMap,
      logger: loggerCallback,
      correlationId: '',
      piiLoggingEnabled: true
    }
    )
  ],
  exports: [],
  declarations: [
    EmailConfirmationComponent,
    RegistrationComponent,
    LoginComponent
  ],
  providers: [AccountService]
})
export class AccountModule {}
