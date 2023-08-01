const _ = require('lodash');

// Flattening a deeply nested array using lodash
const array = [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3]]]];
const flattendArray = _.flattenDeep(array);

console.log(`The flattened array "${flattendArray}", and checking if it is an array: ${Array.isArray(flattendArray).toString()}\n`);

// Sorting an unsorted array using Lodash
const randomArray = [87, 12, 45, 64, 3, 98, 21, 77, 33, 55];

console.log(`Sorting the array: ${_.sortBy(randomArray)}`);
console.log(`Maximum Value is: ${_.max(randomArray)}`);
console.log(`Filter the array: ${_.filter(randomArray, (num) => num > 50)}`, '\n');

// How to use the chuck function of lodash
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = _.chunk(originalArray, 2);

console.log(chunkedArray, '\n');
