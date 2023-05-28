const express = require('express');

const router = express.Router();

router.post('/login', require('./api/login'));
router.post('/signup', require('./api/signup'));

module.exports = router