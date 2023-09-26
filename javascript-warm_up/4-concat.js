#!/usr/bin/node

// Get the first and second arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Check if both arguments are defined
if (arg1 !== undefined && arg2 !== undefined) {
  // Print the concatenation of the two arguments in the format " is "
  console.log(arg1 + ' is ' + arg2);
} else {
  // Print "undefined is undefined" if one or both arguments are missing
  console.log('undefined is undefined');
}
