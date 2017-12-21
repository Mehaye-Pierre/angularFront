import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';
import { ShoppingCart } from '../models/shopping-cart.model';
import { ProductsDataService, ProductsResponse } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';


interface CurrentItem extends CartItem {
  product: Product;
  quantity: number;
  price: number;
}




@Component({
  selector: 'app-cart-detailled',
  templateUrl: './cart-detailled.component.html',
  styleUrls: ['./cart-detailled.component.css']
})
export class CartDetailledComponent implements OnInit, OnDestroy {
  public products: Observable<ProductsResponse>;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;
  public itemList: CurrentItem[];
  public title = 'Suppression';
  public message = 'Voulez-vous vraiment vider la totalité du panier ?';
  public confirmClicked = false;
  public cancelClicked = false;
  public confirmText = 'Oui';
  public cancelText = 'Annuler';


  private cartSubscription: Subscription;

  public constructor(private productsService: ProductsDataService,
                     private shoppingCartService: ShoppingCartService) {
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public ngOnInit(): void {
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.all().subscribe((products) => {
        this.itemList = cart.items
        .map((item) => {
           const product = products.products.find((p) => p.itemId === item.productId);
           return {
             ...item,
             product,
             quantity : item.quantity,
             price: product.price,
              };
        });
    });
    });
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

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product, quantity: number): void {
    this.shoppingCartService.addItem(product, -quantity);
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
