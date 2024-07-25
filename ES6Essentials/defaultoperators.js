function addTwoNumbers(num1 = 1, num2 = 3) {
  return num1 + num2;
}

console.log(addTwoNumbers()); //NaN if not values are passed in invoking function and invoked function
console.log(addTwoNumbers(10, 20)); // 30
console.log(addTwoNumbers()); // 4,if no values are passed and the default values used are 1 and 3
console.log(addTwoNumbers(10)); // 13,if only 1 value is passed in the calling function and for other it takes the default value
