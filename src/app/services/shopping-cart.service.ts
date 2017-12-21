import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { ShoppingCart } from '../models/shopping-cart.model';
import { ProductsDataService } from '../services/products.service';


@Injectable()
export class ShoppingCartService {
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();

  public constructor(private storageService: StorageService,
                     private productService: ProductsDataService) {
    this.storage = this.storageService.get();
    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieve());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }

  public get(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }

  public addItem(product: Product, quantity: number): void {
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.productId === product.itemId);
    if (item === undefined) {
      item = new CartItem();
      item.productId = product.itemId;
      item.price = product.price;
      cart.items.push(item);
    }

    item.quantity += quantity;
    cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);

    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  public contains(product: Product): boolean {
    return (this.retrieve().items.find((p) => p.productId === product.itemId) !== undefined);
  }

  public removeItem(product: Product): void {
    const cart = this.retrieve();
    cart.items = cart.items.filter((cartItem) => cartItem.productId !== product.itemId);
    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  public empty(): void {
    const newCart = new ShoppingCart();
    this.save(newCart);
    this.dispatch(newCart);
  }


  private calculateCart(cart: ShoppingCart): void {
    cart.itemsTotal = cart.items
                          .map((item) => item.quantity * item.price)
                          .reduce((previous, current) => previous + current, 0);
  }

  private retrieve(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = this.storage.getItem('cart');
    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart;
  }

  private save(cart: ShoppingCart): void {
    this.storage.setItem('cart', JSON.stringify(cart));
  }

  private dispatch(cart: ShoppingCart): void {
    this.subscribers
        .forEach((sub) => {
          try {
            sub.next(cart);
          } catch (e) {
          }
        });
  }
}
