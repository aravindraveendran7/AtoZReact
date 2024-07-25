/*
1.findIndex() accepts a  callback a return 1 or -1 if value is found or not found respctly.
2.difference between indexof() and findIndex() is that the later accepts a callback and can be used for compled json objects whose need to find just more than a value.
3.By default the search starts at the first element and ends at the last.
*/
const personArray = [
  {
    firstName: "Jonas",
    age: 18,
    country: "INDIA",
  },
  {
    firstName: "asdf",
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

console.log(personArray.findIndex((item) => item.age === 18)); //0
