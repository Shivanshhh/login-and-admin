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
// const ONE_HOURS = 1000 * 60 * 60;
mongoose.connect(process.env.mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 15000,
    sameSite: true,
  },
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));

app.listen(5000, () => {
  console.log('listening to port 5000');
});

app.use('/login', loginroute);
app.use('/admin', adminroute);
app.use('/registration', regroute);
app.use('/dashboard', dashboardroute);
