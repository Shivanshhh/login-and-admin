/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();
const dotenv = require('dotenv');
const regroute = require('./routes/registration');
const adminroute = require('./routes/admin');
const loginroute = require('./routes/login');
const dashboardroute = require('./routes/dashboard');

dotenv.config();
const ONE_HOURS = 1000 * 60 * 60;
mongoose.connect(process.env.mongo_url, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log('Mongo Connection Success');
  }
});
const {
  PORT = 5000,
  SESS_NAME = 'shiv',
  SESS_SECRET = 'secrett',
  SESS_LIFETIME = ONE_HOURS,
} = process.env;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  name: SESS_NAME,
  reSave: false,
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
    maxAge: SESS_LIFETIME,
    sameSite: true,
  },
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));

app.listen(PORT, () => {
  console.log('listening to port 5000');
});

app.use('/login', loginroute);
app.use('/admin', adminroute);
app.use('/', regroute);
app.use('/dashboard', dashboardroute);
