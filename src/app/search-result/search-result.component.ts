import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product.model';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public products: Observable<Product[]>;

  constructor(private productsService: ProductsDataService,
    private shoppingCartService: ShoppingCartService) { }

  public addProductToCart(product: Product, quantity: number): void {
    this.shoppingCartService.addItem(product, quantity);
  }

  public removeProductFromCart(product: Product, quantity: number): void {
    this.shoppingCartService.addItem(product, -quantity);
  }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
        .get()
        .subscribe((cart) => {
          obs.next(cart.items.some((i) => i.productId === product.id));
          obs.complete();
        });
      sub.unsubscribe();
    });
  }

  ngOnInit() {
    this.products = this.productsService.all();
  }

}
