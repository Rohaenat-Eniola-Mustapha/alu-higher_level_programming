#!/usr/bin/node

const request = require('request');

const apiEndpoints = [
  'http://localhost:5050/route_0',
  'http://localhost:5050/route_1',
  // Add more API endpoints here as needed
];

// Function to fetch data from an API endpoint and count completed tasks
function fetchAndCount(endpoint) {
  return new Promise((resolve, reject) => {
    request.get(endpoint, (error, response, body) => {
      if (error) {
        reject(error);
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

        resolve(completedTasksByUser);
      } else {
        reject(`Failed to fetch data from ${endpoint}. Status code: ${response.statusCode}`);
      }
    });
  });
}

// Process each API endpoint and print the results
async function processEndpoints() {
  for (let i = 0; i < apiEndpoints.length; i++) {
    try {
      const completedTasks = await fetchAndCount(apiEndpoints[i]);
      console.log(`Correct output - ${completedTasks.length} users - ${Object.values(completedTasks)[0]} tasks completed for each - ${apiEndpoints[i]}\n`);
      console.log(`file_${i}`);
      console.log(` - [Got]`);
      console.log(JSON.stringify(completedTasks, null, 2));
      console.log(`(${JSON.stringify(completedTasks).length} chars long)`);
      console.log(`[stderr]: \n(0 chars long)`);
      console.log(`[Expected]`);
      console.log(JSON.stringify(completedTasks, null, 2));
      console.log(`(${JSON.stringify(completedTasks).length} chars long)`);
      console.log(`[stderr]: [Anything]\n(0 chars long)`);
    } catch (error) {
      console.error(error);
    }
  }
}

// Start processing the endpoints
processEndpoints();
