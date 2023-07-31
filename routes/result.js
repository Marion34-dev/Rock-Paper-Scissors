const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const battle = req.app.locals.battle;
    const weapon = req.body.choice;
    const currentPlayer = battle.currentPlayer();
    const otherPlayer = battle.otherPlayer();
    // battle.switch();

    res.render('result', {
        currentPlayer: currentPlayer,
        otherPlayer: otherPlayer,

    });
})

module.exports = router;
