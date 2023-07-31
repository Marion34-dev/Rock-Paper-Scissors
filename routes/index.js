const express = require('express');
const router = express.Router();

// Render view of index.ejs file
router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;
