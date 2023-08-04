const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');

router.route('/')
    // Renders the 'result.ejs' view template and passes 'name' and 'weapon' (properties from app.locals using destructuring) as parameters to display the result page.
    .get((req, res) => {
        const { name, weapon } = req.app.locals;
        res.render('result', { name, weapon });
    })

    // Sets the 'weapon' property in app.locals to the value received from 'weapon' in the request body.
    // Creates instance of Battle class with 'name' and 'weapon' and uses the 'result()' method.
    // Renders the 'result.ejs' view template and passes all necessary data to display the result page.
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
