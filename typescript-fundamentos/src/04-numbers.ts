(() => {
  let productPrice: number = 100;
  productPrice = 12;
  console.log('Product Price: ', productPrice);

  let customerAge: number = 19;
  // customerAge += '1'; // = 281
  customerAge += 1;

  let productInStock: number;
  console.log('Product in Stock: ', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('10');
})();
