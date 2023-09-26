#!/usr/bin/node

// Get the first argument
const arg = process.argv[2];

// Convert the argument to an integer using parseInt
const integer = parseInt(arg);

// Check if the conversion was successful and not NaN
if (!isNaN(integer)) {
  // Print the result
  console.log(`My number: ${integer}`);
} else {
  // Print "Not a number"
  console.log("Not a number");
}

