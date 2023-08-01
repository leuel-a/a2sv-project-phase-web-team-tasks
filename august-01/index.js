#!/home/leuel/.nvm/versions/node/v18.17.0/bin/node
const _ = require('lodash');

// Using Lodash for flattening an array of arrays into a single array
const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
const flattenedArray = _.flattenDeep(array);

console.log(flattenedArray);
console.log(typeof flattenedArray, Array.isArray(flattenedArray));


// Dummy array that I will use to test the sorting function in lodash

