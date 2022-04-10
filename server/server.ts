let faker = require('@faker-js/faker');
let fs = require('fs');

const database = { products: [] } as any;

for (let i = 1; i <= 100; i++) {
  database.products.push({
    id: i.toString(),
    title: faker.faker.commerce.productName(),
    description: faker.faker.lorem.text(),
    price: +faker.faker.commerce.price(),
    image: faker.faker.image.avatar(),
    quantity: faker.faker.datatype.number({ min: 1, max: 500, precision: 1 }).toString(),
  });
}
fs.writeFileSync('data.json', JSON.stringify(database));
