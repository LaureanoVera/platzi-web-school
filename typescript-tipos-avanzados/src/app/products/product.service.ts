import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto } from "./productDto";
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

export const updateProduct = (
  id: string | number,
  changes: UpdateProductDto
): void => {
  // code
};
