/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const dotenv = require('dotenv');
const loginroute = require('./routes/registration');
const adminroute = require('./routes/admin');

dotenv.config();

mongoose.connect(process.env.mongo_url, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log('Mongo Connection Success');
  }
});
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));
app.listen(4000, () => {
  console.log('listening to port 4000');
});
app.use('/', loginroute);
app.use('/admin', adminroute);
