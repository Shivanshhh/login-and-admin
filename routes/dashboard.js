/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/login');
  } else {
    next();
  }
};

router.get('/', redirectLogin, (req, res) => {
  res.render('dashboard');
});

module.exports = router;
