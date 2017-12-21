export class Product {
  public itemId: number;
  public name: string;
  public quantity: number;
  public description: string;
  public price: number;

  public updateFrom(src: Product): void {
    this.itemId = src.itemId;
    this.name = src.name;
    this.quantity = src.quantity;
    this.description = src.description;
    this.price = src.price;
  }
}
