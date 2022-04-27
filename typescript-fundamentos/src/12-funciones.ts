(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size,
    };
  }

  let size1: Sizes = 'M';
  const product1 = createProductToJson('p1', new Date(), 4, size1);

  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes // ? = optional
  ) => {
    return {
      title,
      createAt,
      stock,
      size,
    };
  };

  let size2: Sizes = 'L';
  const product2 = createProductToJsonV2('p2', new Date(), 1);
})();
