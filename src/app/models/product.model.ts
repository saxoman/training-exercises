export class Product {
  public id: string;
  public title: string;
  public description: string;
  public price: number;
  public image: string;
  public quantity: string;

  constructor(id: string, title: string, description: string, price: number, image: string, quantity: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.quantity = quantity;
  }
}
