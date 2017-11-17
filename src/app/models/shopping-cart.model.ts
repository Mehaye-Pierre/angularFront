import { CartItem } from '../models/cart-item.model';

export class ShoppingCart {
  public items: CartItem[] = new Array<CartItem>();
  public itemsTotal = 0;

  public updateFrom(src: ShoppingCart) {
    this.items = src.items;
    this.itemsTotal = src.itemsTotal;
  }
}
