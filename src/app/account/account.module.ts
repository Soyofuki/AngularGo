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
      auth: {
        clientId: '',
        authority: 'https://login.microsoftonline.com/common/',
        validateAuthority: true,
        redirectUri: webBaseUrl + '/account/login',
        postLogoutRedirectUri: webBaseUrl + '/account/login',
        navigateToLoginRequestUrl: true
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
      framework: {
          isAngular: true
      }
    },
      {
        popUp: !isIE,
        consentScopes: [
          'user.read',
          'openid',
          'profile',
        ],
        unprotectedResources: [],
        protectedResourceMap: [
          [webBaseUrl, ['user.read']]
        ],
        extraQueryParameters: {}
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
