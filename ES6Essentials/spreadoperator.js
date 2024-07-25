//spread operator in js and its various usages and output
const array1 = [1, 2, 3];
const array2 = [3, 5, 5];
const newArrayAfterSpread = [...array1, ...array2];
console.log(`New array after spread is : ${newArrayAfterSpread}`); //New array after spread is : 1,2,3,3,5,5
console.log(...array2, ...array1); // 3,5,5,1,2,3
console.log([...array1, ...array2]); //[ 1, 2, 3, 3, 5, 5 ]
console.log(...array1, [...array2]); //1 2 3 [ 3, 5, 5 ]
console.log(99, ...array1, 100, [...array2]); //99 1 2 3 100 [ 3, 5, 5 ]
console.log([99, ...array1, 100, ...array2]); //[99, 1, 2, 3,100, 3, 5, 5]
