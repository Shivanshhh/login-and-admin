/* eslint-disable linebreak-style */
const express = require('express');
const Login = require('../models/schema');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.render('notloggedin');
  } else {
    next();
  }
};

router.get('/dashboard', redirectLogin, async (req, res) => {
  const user = await Login.findOne({ email: req.session.userId });
  res.render('dashboard', { user1: user });
});

router.get('/dashboard/otherpage1', redirectLogin, (req, res) => {
  res.render('otherpage1');
});

router.get('/dashboard/otherpage2', redirectLogin, (req, res) => {
  res.render('otherpage2');
});

module.exports = router;
