const _ = require('lodash');

// Flattening a deeply nested array using lodash
const array = [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3]]]];
const flattendArray = _.flattenDeep(array);

console.log(`
  The flattened array "${flattendArray}", and checking if it is an array: ${Array.isArray(flattendArray).toString()}
`);

// Sorting an unsorted array using Lodash
const randomArray = [87, 12, 45, 64, 3, 98, 21, 77, 33, 55];

console.log(`${_.sortBy(randomArray)}`);
console.log(`${_.max(randomArray)}`);
console.log(`${_.filter(randomArray, (num) => num > 50)}`);
