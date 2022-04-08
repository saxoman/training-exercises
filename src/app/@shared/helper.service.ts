import { Injectable, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Product } from '@app/models/product.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HelperService implements InMemoryDbService {
  public productsUrl = 'api/products';
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

  // createDb(){
  //
  //    products: Product[];
  //
  //   // console.log(this.products);
  //   // return this.products;
  //   // const products = [
  //   //   { id: 11, name: 'Dr Nice' },
  //   //   { id: 12, name: 'Narco' },
  //   //   { id: 13, name: 'Bombasto' },
  //   //   { id: 14, name: 'Celeritas' },
  //   //   { id: 15, name: 'Magneta' },
  //   //   { id: 16, name: 'RubberMan' },
  //   //   { id: 17, name: 'Dynama' },
  //   //   { id: 18, name: 'Dr IQ' },
  //   //   { id: 19, name: 'Magma' },
  //   //   { id: 20, name: 'Tornado' }
  //   // ];

  // return products;
  //}

  constructor() {}
}
