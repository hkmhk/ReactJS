const express = require("express");
const router = express.Router();
const connection = require('../../helpers/db');

router.get('/', (req, res) => res.send('connected'))
router.post('/signup', function (req, res, next) {
    const { name, password, email, lastname } = req.body;
    connection.connect(function (err) {
        if (err) res.status(500).send(err);
        console.log("Connected!");
        const sql = `INSERT INTO react(email, password, name, lastname) VALUES(${JSON.stringify(email)}, ${JSON.stringify(password)}, ${JSON.stringify(name)}, ${JSON.stringify(lastname)})`;
        connection.query(sql, function (err, result) {
            if (err) res.status(500).send(err);
            res.status(200).send(result);
        });
    });
});

module.exports = router;