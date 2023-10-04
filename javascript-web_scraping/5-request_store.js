#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Check if the correct number of command line arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node 5-request_store.js <URL> <file-path>');
  process.exit(1);
}

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    // Write the response body to the specified file (UTF-8 encoded)
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
      if (writeError) {
        console.error(writeError);
      } else {
        console.log(`Data has been written to ${filePath}`);
      }
    });
  } else {
    console.error(`Failed to fetch data. Status code: ${response.statusCode}`);
  }
});
