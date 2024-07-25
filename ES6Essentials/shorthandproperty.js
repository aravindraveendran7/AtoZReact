//Example for shorthandproperty in js

const id = 1;
const productName = "MacPro";
const price = 78999;

const product = {
  id: id,
  productName: productName,
  price: price,
};

//The above product object can be refactored as below since its using the same name.Both gives same result

const productRefactored = {
  id,
  productName,
  price,
};

console.log(product); //{ id: 1, productName: 'MacPro', price: 78999 }
console.log(productRefactored); //{ id: 1, productName: 'MacPro', price: 78999 }
