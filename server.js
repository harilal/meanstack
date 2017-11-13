// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
//const configureMongoose = require('./server/config/mongoose');
const configureExpress = require('./server/config/express');

// Create a new Mongoose connection instance
//const db = configureMongoose();

// Create a new Express application instance
const app = configureExpress();

// Use the Express application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;