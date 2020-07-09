/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const Login = require('../models/schema');

router.get('/', (req, res) => {
  res.render('registration');
});

const redirectdashboard = (req, res, next) => {
  if (req.session.userId) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};

router.post('/', redirectdashboard, async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const newUser = await Login.create(req.body);
  res.redirect('/login');
});

module.exports = router;
