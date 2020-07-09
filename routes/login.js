/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const Login = require('../models/schema');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const email1 = req.body.email;
  const password1 = req.body.password;
  const f = await Login.findOne({ email: email1 });
  if (f) {
    if (f.password === password1) {
      req.session.userId = f.email;
      res.redirect('/dashboard');
    } else {
      res.redirect('/login');
    }
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
