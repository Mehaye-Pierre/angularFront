import { Product } from './../models/product.model';
import { ProductsDataService } from './../services/products.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observer } from 'rxjs/Observer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailled-article',
  templateUrl: './detailled-article.component.html',
  styleUrls: ['./detailled-article.component.css']
})
export class DetailledArticleComponent implements OnInit {

  public products: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsDataService,
    private shoppingCartService: ShoppingCartService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.productsService.get(id).subscribe(res => this.products = res.product);

  }

  public addProductToCart(): void {
    this.shoppingCartService.addItem(this.products, 1);
  }

  public removeProductFromCart(quantity: number): void {
    this.shoppingCartService.addItem(this.products, -quantity);
  }

  public removeAllProductFromCart(): void {
    this.shoppingCartService.removeItem(this.products);
  }



  public productInCart(): boolean {
    return this.shoppingCartService.contains(this.products);
  }

  public goBack() {
    this.location.back();
  }

}
