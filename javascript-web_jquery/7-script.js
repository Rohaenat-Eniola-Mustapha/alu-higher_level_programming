$(document).ready(function () {
    // Make an AJAX GET request to the API URL
    $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function (data) {
      // Extract the character name from the response data
      var characterName = data.name;
  
      // Display the character name in the <div> with id 'character'
      $('#character').text(characterName);
    });
  });
  