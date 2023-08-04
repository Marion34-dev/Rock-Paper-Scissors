const express = require('express');
// const port = 3000;
const host = process.env.HOST;
const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');
const turnRouter = require('./routes/result.js');

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/result', turnRouter);

app.listen(port, host, () => {
    // console.log(`Example app listening on http://localhost:${port}`);
    console.log(`Connecting to ${host} ${port}`);

});

module.exports = app; 
