import { addProduct } from "./products/product.service";

addProduct({
  id: 1,
  title: "product",
  createdAt: new Date(),
  stock: 2,
  category: {
    id: 255,
    name: "comics",
  },
});
