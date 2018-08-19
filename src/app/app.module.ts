// Fundamental modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Basic
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Core modules
import { CoreModule } from './core/core.module';

// Feature modules that do not use lazy loading should be imported in the app module
import { HomeModule } from './home/home.module';

const baseUrl: string = environment.baseUrl;

// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(baseUrl + '/api');
  RestangularProvider.setDefaultHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
    Authorization:
      'Bearer ' +
      JSON.parse(localStorage.getItem('currentUser')).token.access_token
  });
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    NgbModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
