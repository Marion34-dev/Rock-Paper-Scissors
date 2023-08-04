const express = require('express');
const router = express.Router();

router.route('/')

    .post((req, res) => {
        req.app.locals.name = req.body.player1;
        res.redirect('/game');
    })
    
    .get((req, res) => {
        res.render('game', {
            name: req.app.locals.name,
        });
    });

module.exports = router;
