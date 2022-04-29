import { addProduct } from "./products/product.service";

addProduct({
  id: 1,
  title: "product",
  createAt: new Date(),
  updateAt: new Date(),
  stock: 2,
  category: {
    id: 255,
    name: "comics",
    createAt: new Date(),
    updateAt: new Date(),
  },
});
