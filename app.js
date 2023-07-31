const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');
const turnRouter = require('./routes/result.js');

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
