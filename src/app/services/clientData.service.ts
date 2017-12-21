import { environment as env} from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Address } from '../models/address.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientDataService {
    constructor(protected http: Http) {}


    public getAddress(): Observable<Address[]> {
        return this.http
        .get(`${env.appUrl}/addresses?requestid=1`)
        .map((response) => response.json()
                                   .map((address) => {
                                     const model = new Address();
                                     model.updateFrom(address);
                                     return model;
                                   }));

    }

}
