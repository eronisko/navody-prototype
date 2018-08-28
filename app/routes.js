const express = require('express')
const router = express.Router()

router.get('/navod', function (req, res) {
    res.render('navod', {'message' : 'Hello world'});
});

module.exports = router;
