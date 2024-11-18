// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// DB Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log('DB Connected'))
.catch(err => console.log('DB Connection Error => ', err));