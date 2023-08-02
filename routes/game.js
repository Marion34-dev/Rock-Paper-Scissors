const express = require('express');
const router = express.Router();

router.route('/')
    // Sets the 'name' property in app.locals to the value received from 'player1' in the request body.
    // Redirects to the '/game' URL path.
    .post((req, res) => {
        req.app.locals.name = req.body.player1;
        res.redirect('/game');
    })
    
    // Renders the 'game.ejs' view template and passes the 'name' property from app.locals as a parameter.
    .get((req, res) => {
        res.render('game', {
            name: req.app.locals.name,
        });
    });

module.exports = router;
