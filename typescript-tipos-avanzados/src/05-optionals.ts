export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 0,
    // nullish-coalescing = ??
    isNew,
  };
};

const p1 = createProduct(1, true, 4);
const p2 = createProduct(1, true);

console.log(p1);
console.log(p2);
