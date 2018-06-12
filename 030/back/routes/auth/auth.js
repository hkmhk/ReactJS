const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send('connected'))
router.post('/signup', function (req, res, next) {
    res.send('I am in POST signup');
});

module.exports = router;