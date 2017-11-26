import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public constructor(private http: Http) {}

  login(user): number[] {
    const result = [];

    this.http.get('./assets/clients.json').map(data => data.json()).subscribe(success => {
      let status = 0;
      for (let i = 0; i < success.length; i++) {
        if (success[i].login === user.login) {
          if (success[i].password === user.password) {
            status = 1;
            break;
          } else {
            status = 2;
            break;
          }
        }
      }
      result.push(status);
    });

    console.log(result);
    console.log(result[0]);
    return result;
  }

  register(user): void {

  }
}

