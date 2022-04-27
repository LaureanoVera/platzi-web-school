(() => {
  const login = (data: { email: string; password: string }) => {
    const { email, password } = data;
    console.log(email, password);
  };

  login({
    email: 'l4ur1_v3r4@hello.com',
    password: '0111-laureanovera-1001-nacimientodeunaleyenda',
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createAt?: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({ title: 'product', createAt: new Date(), stock: 15 });
})();
