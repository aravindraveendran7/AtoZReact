//The some() method checks if any of array elements pass a test.If the age is greater than 10 for any of the elements in array it gives true,false if none satisfies the condition
const personArray = [
  {
    firstName: "Jonas",
    age: 18,
    country: "INDIA",
  },
  {
    firstName: "Aradhya",
    age: 1,
    country: "Germany",
  },
  {
    firstName: "Jithin",
    age: 31,
    country: "Sweden",
  },
];

let result = personArray.some((item) => item.age > 32); //false
let result1 = personArray.some((item) => item.age > 10); //true
console.log(result);
console.log(result1);
