// Wait for the document to be fully loaded
$(document).ready(function() {
    // Define the API URL
    const apiUrl = 'https://fourtonfish.com/hellosalut/?lang=fr';
  
    // Send an AJAX GET request to the API
    $.ajax({
      type: 'GET',
      url: apiUrl,
      success: function(data) {
        // Extract the translation of "hello" from the response
        const helloTranslation = data.hello;
  
        // Display the translation in the HTML div with id "hello"
        $('#hello').text(helloTranslation);
      },
      error: function() {
        console.error('Error fetching translation.');
      }
    });
  });  