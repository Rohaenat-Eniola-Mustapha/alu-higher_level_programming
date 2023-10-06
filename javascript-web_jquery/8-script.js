// Wait for the document to be fully loaded
$(document).ready(function() {
    // Define the API URL
    const apiUrl = 'https://swapi-api.alx-tools.com/api/films/?format=json';
  
    // Send an AJAX GET request to the API
    $.ajax({
      type: 'GET',
      url: apiUrl,
      success: function(data) {
        // Loop through the movie data and add each title to the list
        data.results.forEach(function(movie) {
          $('#list_movies').append('<li>' + movie.title + '</li>');
        });
      },
      error: function() {
        console.error('Error fetching movie data.');
      }
    });
  });  