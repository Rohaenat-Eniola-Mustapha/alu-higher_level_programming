#!/usr/bin/node

const request = require('request');

// Check if the correct number of command line arguments are provided
if (process.argv.length !== 3) {
  console.error('Usage: node 2-statuscode.js <URL>');
  process.exit(1);
}

// Get the URL from the command line argument
const url = process.argv[2];

// Send a GET request and display the status code
request.get(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
