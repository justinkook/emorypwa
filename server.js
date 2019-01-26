const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set the port to 3000 OR let the process set the port (if deployed to Heroku)
const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();
app.use(compression());

/* Redirect http to https */
app.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production')
    res.redirect('https://' + req.headers.host + req.url)
  else
    next() /* Continue to other routes if we're not redirecting */
});

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the Mongo DB using the inventorymaster database (will be created if it doesn't exist)
mongoose.connect('mongodb://admin:password1@ds117111.mlab.com:17111/heroku_qkzxjhrm', { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// API Routes (require from routes file and pass in Express app)
require('./routes/api-routes')(app);

// Start the server
app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});
