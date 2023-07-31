const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');
const Player = require('../src/player.js');

router.post('/', (req, res) => {
    const battle = new Battle();
    const names = [req.body.player1, "Your Opponent"];
    battle.setup(names);
    req.app.locals.battle = battle;

    res.redirect('/game');
})

router.get('/', (req, res) => {
    const player = req.app.locals.battle.currentPlayer();

    res.render('game', {
        name: player.name,
    });
})

module.exports = router;
