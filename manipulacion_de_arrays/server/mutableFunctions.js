const products = [
  { title: "Pizza", price: 121, id: 1 },
  { title: "Burger", price: 121, id: 2 },
  { title: "Hot cakes", price: 121, id: 3 },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(15));

const product = products.findIndex(item => item.id === 2)
if (product) {
  myProducts.push(products[product])
  products.splice(product,1)
}
console.log(products);
console.log(myProducts);
console.log("-".repeat(15));

console.group('Update:')
const productsV2 = [
  { title: "Pizza", price: 121, id: 1 },
  { title: "Burger", price: 121, id: 2 },
  { title: "Hot cakes", price: 121, id: 3 },
];

const update = {
  id: 3,
  changes: {
    price: 130,
    description: 'Yummy'
  }
}

const productIndex = productsV2.findIndex(item => item.id === update.id)
productsV2[productIndex] = {...productsV2[productIndex], ...update.changes}
console.log(productsV2);
console.groupEnd('Update:')
