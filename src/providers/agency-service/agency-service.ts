import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AgencyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgencyServiceProvider {

  result: any;

  constructor(public http: HttpClient) {
    // console.log('Hello AgencyServiceProvider Provider');
  }

  getAgenciesByCap(cap: string) {
    let promise = new Promise((resolve, reject) => {
      this.http.get('https://lastello.it/api/v1/agencies_by_cap.json?cap=' + cap)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            this.result = res;
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

}
