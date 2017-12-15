
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Client } from '../models/client';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public constructor(private http: Http) {}

  login(user: Client): Promise<any> {
    return this.http.get('./assets/clients.json').map(data => data.json()).toPromise();
  }

  register(user: Client): Promise<any> {
    return this.http.get('./assets/clients.json').map(data => data.json()).toPromise();
  }

  ensureAuthenticated(token): Promise<any> {
    return this.http.get('./assets/response.json').map(data => data.json()).toPromise();
  }
}

