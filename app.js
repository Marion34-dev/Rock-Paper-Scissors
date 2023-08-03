// Import the required modules and set up the express app
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to EJS and use the bodyParser middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Import the routers
const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');
const turnRouter = require('./routes/result.js');

// Use the indexRouter first, so the index page is shown first
app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/result', turnRouter);

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app; 
