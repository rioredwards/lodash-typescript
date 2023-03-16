import _ from "lodash";
import "reflect-metadata";
import { validate } from "class-validator";
import { Product } from "./product.model";
import { plainToInstance } from "class-transformer";

const newProd = new Product("", 5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation errors!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

console.log(_.shuffle([1, 2, 3, 4, 5]));

const products = [
  { title: "A Book", price: 12.99 },
  { title: "A Carpet", price: 99.99 },
];

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
