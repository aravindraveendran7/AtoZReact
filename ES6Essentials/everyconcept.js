//The every() method checks if all of array elements pass a test.If the age is greater than 10 for all of the elements in array it gives true,false if none satisfies the condition
const personArray = [
  {
    firstName: "Jonas",
    age: 18,
    country: "INDIA",
  },
  {
    firstName: "Aradhya",
    age: 12,
    country: "Germany",
  },
  {
    firstName: "Jithin",
    age: 31,
    country: "Sweden",
  },
];

let result = personArray.every((item) => item.age > 10); //true
let result1 = personArray.every((item) => item.age > 45); //false
let result2 = personArray.every((item) => item.age > 12); //false
console.log(result);
console.log(result1);
console.log(result2);
