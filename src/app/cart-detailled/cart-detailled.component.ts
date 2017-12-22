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



@Component({
  selector: 'app-cart-detailled',
  templateUrl: './cart-detailled.component.html',
  styleUrls: ['./cart-detailled.component.css']
})
export class CartDetailledComponent implements OnInit, OnDestroy {
  public products: Observable<ProductsResponse>;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;
  public itemList:  CartItem[];
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
    this.cart.subscribe((value: ShoppingCart) => this.itemList = value.items.map(item => {
      const product = this.productsService.get(String(item.productId));
      return {
      ...item,
      product,
      quantity : item.quantity,
      price: item.price
       };
    }));
  }


  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product, quantity: number): void {
    this.shoppingCartService.addItem(product, -quantity);
  }

  public removeAllProductFromCart(product: Product, quantity: number): void {
    this.shoppingCartService.removeItem(product);
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
