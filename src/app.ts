import "reflect-metadata";
import { plainToInstance } from "class-transformer";

import { Product } from "./product.model";

const products = [
  { title: "A Book", price: 12.99 },
  { title: "A Carpet", price: 99.99 },
];

const loadedProducts = plainToInstance(Product, products);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// const p1 = new Product("A Book", 12.99);
// console.log(p1.getInformation());
