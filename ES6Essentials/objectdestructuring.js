const id = 3;
const productName = "bag";
const price = 3000;

const product = {
  description: "an extra bag",
  id,
  productName,
  price,
};

const getProductDescription = product.description;
console.log(getProductDescription); //an extra bag

//above lines of code can be refactored using destructring in js
//Here the object product contains all the inforamtion and we are desctructring it

const { description } = product;
console.log(productName); //an extra bag
