const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

// import {register} from '../controllers/auth';

// router.post('/register', (req, res) => {
//     console.log('REGISTER ENDPOINT => ', req.body);
// });

router.post('/register', authController.register);

module.exports = router;