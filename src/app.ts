import "reflect-metadata";
import { validate } from "class-validator";
import { Product } from "./product.model";

const newProd = new Product("", 5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation errors!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
