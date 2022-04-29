export type Sizes = "S" | "M" | "L" | "XL";
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size: Sizes;
// };

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
}

const products: Product[] = [];

const addProduct = (data: Product): void => {
  products.push(data);
};
