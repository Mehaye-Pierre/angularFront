import { Product } from './../models/product.model';
import { ProductsDataService } from './../services/products.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-detailled-article',
  templateUrl: './detailled-article.component.html',
  styleUrls: ['./detailled-article.component.css']
})
export class DetailledArticleComponent implements OnInit {

  public products: Observable<Product[]>;

  @Input() product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsDataService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const id: String = this.route.snapshot.paramMap.get('id');
    this.products = this.productsService.all();
    this.productsService.all().subscribe((products) => {
      this.product = products.find((p) => p.id === id);
      });

  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
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

}
