import { Injectable, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Product } from '@app/models/product.model';
//import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public productsUrl = '/products';
  products: Product[] = [];

  createProducts() {
    for (let i = 1; i <= 10; i++) {
      this.products.push({
        id: i.toString(),
        title: faker.commerce.productName(),
        description: faker.lorem.sentences(2),
        price: +faker.commerce.price(),
        image: `${faker.image.fashion()}?random=${Math.round(Math.random() * 1000)}`,
        quantity: faker.datatype.number({ min: 1, max: 500, precision: 1 }).toString(),
      });
    }
    return this.products;
  }

  createDb() {
    const products = this.createProducts();
    return { products };
  }
  constructor() {}
}
