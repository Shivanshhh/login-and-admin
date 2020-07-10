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

module.exports = router;
