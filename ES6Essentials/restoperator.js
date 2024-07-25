//copies the first and second element of the array to the variable firstElement and secondElement and the rest to the rest operator variable '...rest'.
const numbers = [1, 2, 4, 5, 5];
const [firstElement, secondElement, ...rest] = numbers;
console.log(firstElement, secondElement, rest);
