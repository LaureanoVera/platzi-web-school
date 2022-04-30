import { Product } from "./product.model";
import { CreateProductDto } from "./productDto";
import faker from "@faker-js/faker";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    },
  };

  products.push(newProduct);

  return newProduct;
};

export const updateProduct = (id: string, changes: Product): void => {
  // code
};
