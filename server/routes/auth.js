const express = require('express');

const router = express.Router();

import {register} from '../controllers/auth';

router.post('/register', (req, res) => {
    console.log('REGISTER ENDPOINT => ', req.body);
});

module.exports = router;