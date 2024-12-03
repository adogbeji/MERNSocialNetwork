const express = require('express');

const router = express.Router();

router.post('/api/register', (req, res) => {
    console.log('REGISTER ENDPOINT => ', req.body);
});

module.exports = router;