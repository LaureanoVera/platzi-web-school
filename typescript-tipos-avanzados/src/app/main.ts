import {
  addProduct,
  products,
  updateProduct,
} from "./products/product.service";
import faker from "@faker-js/faker";

addProduct({
  description: faker.commerce.productDescription(),
  image: faker.image.imageUrl(),
  color: faker.commerce.color(),
  size: faker.random.arrayElement(["M", "S", "L", "XL"]),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
  tags: faker.random.arrayElements(),
  title: faker.commerce.productName(),
  stock: faker.datatype.number({ min: 5, max: 40 }),
  categoryId: faker.datatype.uuid(),
});

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: "New title",
  stock: 80,
});
