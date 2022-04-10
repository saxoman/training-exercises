var faker = require('@faker-js/faker');
var fs = require('fs');

var database = { products: [] };

for (var i = 1; i <= 100; i++) {
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
