#!/usr/bin/node

const request = require('request');

// Check if the correct number of command line arguments are provided
if (process.argv.length !== 3) {
  console.error('Usage: node 4-starwars_count.js <API-URL>');
  process.exit(1);
}

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Send a GET request to the API to fetch all movies
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    if (response.statusCode === 200) {
      const movieData = JSON.parse(body);
      const characterId = 18; // Wedge Antilles character ID
      const moviesWithWedgeAntilles = movieData.results.filter(movie => {
        return movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
      });

      console.log(moviesWithWedgeAntilles.length);
    } else {
      console.error(`Failed to fetch movie data. Status code: ${response.statusCode}`);
    }
  }
});
