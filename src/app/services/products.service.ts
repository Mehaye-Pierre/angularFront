import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CachingServiceBase } from './caching.service';

const count = 0;

@Injectable()
export class ProductsDataService extends CachingServiceBase {
  private products: Observable<Product[]>;

  public constructor(private http: Http) {
    super();
  }

  public all(): Observable<Product[]> {
    return this.cache<Product[]>(() => this.products,
                                 (val: Observable<Product[]>) => this.products = val,
                                 () => this.http
                                           .get('./assets/products.json')
                                           .map((response) => response.json()
                                                                      .map((item) => {
                                                                        const model = new Product();
                                                                        model.updateFrom(item);
                                                                        return model;
                                                                      })));

  }
}
