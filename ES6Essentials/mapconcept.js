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

//get names and country from personArray using map

let showResults = personArray.map(
  (itemFromPersonArray, index) =>
    `${itemFromPersonArray.firstName} country is ${itemFromPersonArray.country} index is ${index}`
);
console.log(showResults);
