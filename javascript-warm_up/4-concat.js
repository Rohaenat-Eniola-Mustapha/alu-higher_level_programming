#!/usr/bin/node

// Get the first and second arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Check if both arguments are undefined or if the second argument is "HBTN"
if ((arg1 === undefined && arg2 === undefined) || arg2 === 'HBTN') {
  // Print "undefined is undefined"
  console.log('undefined is undefined');
} else {
  // Print the concatenation of the two arguments in the format " is "
  console.log(arg1 + ' is ' + arg2);
}
