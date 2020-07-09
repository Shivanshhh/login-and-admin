/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const Login = require('../models/schema');

router.get('/', (req, res) => {
  res.render('login');
});
const redirectdashboard = (req, res, next) => {
  if (req.session.userId) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};

router.post('/', redirectdashboard, async (req, res) => {
  const { email, password } = req.body;
  const a = await Login.find({});
  const user = a.find((user) => user.email === email && user.password === password);
  if (user) {
    req.session.userId = user._id;
    return res.redirect('/dashboard');
  }
  res.redirect('/login');
});

module.exports = router;
