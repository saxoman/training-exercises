import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Product } from '@app/models/product.model';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {
  products: Product[] = [];
  constructor() {}

  ngOnInit(): void {
    for (var i = 1; i <= 10; i++) {
      this.products.push({
        id: i.toString(),
        title: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: +faker.commerce.price(),
        image: faker.image.avatar(),
        quantity: faker.datatype.number({ min: 1, max: 500, precision: 1 }).toString(),
      });
    }
    console.log(JSON.stringify(this.products));
  }
}
