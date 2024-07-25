//find will only return the first true value if there are multiple matchings.
//Difference between find and filter is that filter will give all the results matching that condition,however find will give only one.
const personArray = [
  {
    firstName: "Aravind",
    age: 32,
    country: "INDIA",
  },
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

console.log(personArray.filter((item) => item.country === "INDIA"));
/*
    [
        { firstName: 'Aravind', age: 32, country: 'INDIA' },
        { firstName: 'Jonas', age: 18, country: 'INDIA' }
    ]
*/
