const express = require('express');
const router = express.Router();

// Routes prepended by api/profile

router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;