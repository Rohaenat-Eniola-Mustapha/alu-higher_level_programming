#!/usr/bin/node
// A script that prints the number of movies where the character "Wedge Antilles" is present
const url = process.argv[2];
const request = require('request');

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const parsedData = JSON.parse(body);
    const results = parsedData.results;
    let counter = 0;
    results.forEach(result => {
      result.characters.forEach(characterUrl => {
        if (characterUrl.includes('18')) {
          counter++;
        }
      });
    });
    console.log(counter);
  }
});
