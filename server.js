const express = require('express');
const db = require('./config/connection'); // Importing database connection configuration
const routes = require('./routes'); // Importing routes

const PORT = process.env.PORT || 3001; // Set the port to the value in the environment variable or 3001 if it's not set
const app = express(); // Initialize Express.js server

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use routes from the routes directory
app.use(routes);

// Start the server after database connection is established
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`); // Server start confirmation
    });
});
