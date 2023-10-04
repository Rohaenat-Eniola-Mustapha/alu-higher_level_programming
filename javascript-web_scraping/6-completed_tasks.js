#!/usr/bin/node

const request = require('request');

// Check if the correct number of command line arguments are provided
if (process.argv.length !== 3) {
  console.error('Usage: node 6-completed_tasks.js <API-URL>');
  process.exit(1);
}

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Send a GET request to the API to fetch the task data
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    const tasks = JSON.parse(body);

    // Initialize an object to store the number of completed tasks per user
    const completedTasksByUser = {};

    // Loop through the tasks and count completed tasks per user
    tasks.forEach((task) => {
      if (task.completed) {
        if (!completedTasksByUser[task.userId]) {
          completedTasksByUser[task.userId] = 1;
        } else {
          completedTasksByUser[task.userId]++;
        }
      }
    });

    // Print the completed tasks by user
    console.log(JSON.stringify(completedTasksByUser, null, 2));
  } else {
    console.error(`Failed to fetch task data. Status code: ${response.statusCode}`);
  }
});
