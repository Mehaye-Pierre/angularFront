import { Component, OnInit } from '@angular/core';
import { ProductsDataService, ProductsResponse } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product.model';
import { Observer } from 'rxjs/Observer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {

  public sortChoice = 'name increasing';
  public search = '';

  public products: Observable<ProductsResponse>;

  public labels: any = {
    previousLabel: 'Précedent',
    nextLabel: 'Suivant'
};

  constructor(private productsService: ProductsDataService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute) { }

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
          obs.next(cart.items.some((i) => i.productId === product.itemId));
          obs.complete();
        });
      sub.unsubscribe();
    });
  }

  public sortByNameIncreasing() {
    this.sortChoice = 'name increasing';
  }

  public sortByPriceIncreasing() {
    this.sortChoice = 'price increasing';
  }

  public sortByNameDecreasing() {
    this.sortChoice = 'name decreasing';
  }

  public sortByPriceDecreasing() {
    this.sortChoice = 'price decreasing';
  }

  ngOnInit() {
    this.products = this.productsService.all();
    this.search = this.route.snapshot.paramMap.get('search');
  }

}
