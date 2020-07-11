/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.render('notloggedin');
  } else {
    next();
  }
};

router.get('/', redirectLogin, (req, res) => {
  res.render('dashboard');
});

router.get('/otherpage1', redirectLogin, (req, res) => {
  res.render('otherpage1');
});

router.get('/otherpage2', redirectLogin, (req, res) => {
  res.render('otherpage2');
});

module.exports = router;
