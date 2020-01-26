import { Injectable, NgZone, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

const webBaseUrl: string = environment.webBaseUrl;

@Injectable()
export class GoogleAuthService {
  public auth2: any;
  public user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private userName = '';
  private name = '';
  private idToken = '';

  constructor(private zone: NgZone, private http: HttpClient) { }


  signIn(): void {
    this.auth2.signIn().then(user => {
      this.zone.run(() => {
        this.user$.next(user);
        this.isLoggedIn$.next(true);
      });
    },
      (err) => {
        console.error(err);
      });

  }

  getUser() {
    const user = this.auth2.currentUser.get();
    localStorage.setItem('idToken', user.getAuthResponse().id_token);
    localStorage.setItem('googleAuthUserName', user.getBasicProfile().getEmail());
    localStorage.setItem('googleAuthName', user.getBasicProfile().getName());
  }

  signOut(): void {
    this.auth2.signOut().then(() => {
      this.zone.run(() => {
        this.isLoggedIn$.next(false);
        this.user$.next(null);
      });
    });
  }

  loadAuth2(popup: boolean): void {
    try {
      if (popup) {
        gapi.load('auth2', () => {
          gapi.auth2.init({
            client_id: '',
            fetch_basic_profile: true,
            ux_mode: 'popup',
            redirect_uri: webBaseUrl + '/account/signin-google'
          }).then((auth) => {
            this.zone.run(() => {
              this.auth2 = auth;
              this.isLoaded$.next(true);
            });
            console.log('Load Google auth2 popup');
          },
          );
        });
      } else {
        gapi.load('auth2', () => {
          gapi.auth2.init({
            client_id: '',
            fetch_basic_profile: true,
            ux_mode: 'redirect',
            redirect_uri: webBaseUrl + '/account/signin-google',
            scope: 'profile email'
          }).then((auth) => {
            this.zone.run(() => {
              this.auth2 = auth;
              this.isLoaded$.next(true);
            });
            console.log('Load Google auth2 redirect');
          },
          );
        });
      }
    } catch (e) {
      return;
    }

  }
}
