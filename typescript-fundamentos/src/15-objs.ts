(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createAt?: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({ title: 'product', createAt: new Date(), stock: 15 });

  let product7: Product = {
    title: 'product3',
    createAt: new Date(),
    stock: 1,
    size: 'M',
  };
  addProduct(product7);
})();
