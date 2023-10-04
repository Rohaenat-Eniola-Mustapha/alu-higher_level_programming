#!/usr/bin/node

const request = require('request');

// Check if the correct number of command line arguments are provided
if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <movie-ID>');
  process.exit(1);
}

// Get the movie ID from the command line argument
const movieID = process.argv[2];

// Define the API endpoint URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

// Send a GET request to the API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    if (response.statusCode === 200) {
      const movieData = JSON.parse(body);
      console.log(movieData.title);
    } else {
      console.error(`Failed to fetch movie data. Status code: ${response.statusCode}`);
    }
  }
});
