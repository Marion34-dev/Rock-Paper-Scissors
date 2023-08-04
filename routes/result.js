const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');

router.route('/')
    .get((req, res) => {
        const { name, weapon } = req.app.locals;
        res.render('result', { name, weapon });
    })

    .post((req, res) => {
        req.app.locals.weapon = req.body.weapon;
        const battle = new Battle(req.app.locals.name, req.app.locals.weapon);
        res.render('result', {
            name: req.app.locals.name,
            weapon: req.app.locals.weapon,
            computerWeapon: battle.computerWeapon,
            result: battle.result(),
        });
    });

module.exports = router;
