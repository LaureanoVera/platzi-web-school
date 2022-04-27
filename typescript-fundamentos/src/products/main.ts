import { Product } from './product.model';
import { products, addProduct, calcStock } from './product.service';

addProduct({ title: 'product', createAt: new Date(), stock: 15 });

let product7: Product = {
  title: 'product3',
  createAt: new Date(),
  stock: 1,
  size: 'M',
};

addProduct(product7);

console.log(products);
console.log(calcStock());
