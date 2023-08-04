const express = require('express');
const router = express.Router();
const Session = require('../src/session.js');

router.route('/')
    .get((req, res) => {
        const { name, weapon } = req.app.locals;
        res.render('result', { name, weapon });
    })

    .post((req, res) => {
        req.app.locals.weapon = req.body.weapon;
        const session = new Session(req.app.locals.name, req.app.locals.weapon);
        res.render('result', {
            name: req.app.locals.name,
            weapon: req.app.locals.weapon,
            computerWeapon: session.computerWeapon,
            result: session.result(),
        });
    });

module.exports = router;
