const express = require('express');
const path = require('path');

const mongoose = require('mongoose');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();

/* --------------------- registering Node.js middleware --------------------- */

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());

/* ----------------------- Setting up Authentication ------------------------ */

require('./passport');

/* ---------------------- Setting up Mongodb database ----------------------- */

mongoose.connect('mongodb://localhost/askInternets', () => {
  console.log('connected to mongodb');
}).catch((err) => {
  throw new Error('Mongo cannot connect');
});

/* ----------------------------- Setting up API ----------------------------- */

app.use('/api/v1', routes);

/* --------------------------- Starting Server ------------------------------ */

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
