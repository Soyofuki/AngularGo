import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TranslateService {

  data: any = {};
  locale = '';

  constructor(private http: HttpClient) {
    this.locale = localStorage.getItem('locale');
    if (this.locale === null || this.locale === undefined) {
      this.locale = 'en';
      localStorage.setItem('locale', this.locale);
    }
  }

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `./assets/i18n/${lang || 'en'}.json`;
      localStorage.setItem('locale', lang);
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
