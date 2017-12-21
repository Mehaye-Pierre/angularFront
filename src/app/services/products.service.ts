import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { environment as env } from './../../environments/environment';

const count = 0;

@Injectable()
export class ProductsDataService {

  public constructor(private http: Http) {
  }

  public all(): Observable<ProductsResponse> {
    return this.http.get(`${env.appUrl}/items?requestid=1`)
      .map((response) => {
          const body: any = response.json();
          console.log(body);
          return {err: null, products: body};
        });

  }

  public get(id: string): Observable<ProductResponse> {
    return this.http.get(`${env.appUrl}/items?requestid=2&id=${id}`)
      .map(response => {
        const body: any = response.json();
        console.log(body);
        return { err: null, product: body};
      });
  }
}

export interface ProductsResponse {
  err: any;
  products: Product[];
}

export interface ProductResponse {
  err: any;
  product: Product;
}
