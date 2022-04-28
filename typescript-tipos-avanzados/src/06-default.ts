export const createProduct = (
  id: string | number = Math.floor(Math.random() * 100),
  isNew: boolean = true,
  stock: number = 0
) => {
  return {
    id,
    stock,
    isNew,
  };
};

const p1 = createProduct(1);
