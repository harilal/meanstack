// Load the module dependencies
const config = require('./config');
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

// Define the Express configuration method
module.exports = function() {
	// Create a new Express application instance
	const app = express();
	
	// Create a new HTTP server
    const server = http.createServer(app);

	// Use the 'body-parser' and 'method-override' middleware functions
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());


	// Configure static file serving
	app.use('/', express.static(path.resolve('./public')));
	
	// Return the Server instance
	return server;
};