import { Injectable } from '@angular/core';

import { Restangular } from '../../../node_modules/ngx-restangular';

@Injectable()
export class SampleService {
  samples: any;

  constructor(private restangular: Restangular) {
    this.samples = this.restangular.all('samples');
  }

  getSampleList() {
    return this.samples.getList();
  }
}
