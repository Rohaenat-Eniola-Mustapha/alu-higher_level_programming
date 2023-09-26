#!/usr/bin/node

// Get the first argument and convert it to an integer
const x = parseInt(process.argv[2]);

// Check if the conversion was successful and x is a positive integer
if (!isNaN(x) && x > 0) {
  // Loop x times and print "C is fun" each time
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
} else {
  // Print "Missing number of occurrences" if the argument is missing or not a positive integer
  console.log('Missing number of occurrences');
}
