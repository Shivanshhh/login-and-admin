/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const Login = require('../models/schema');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const email1 = req.body.email;
  const password1 = req.body.password;
  const f = await Login.findOne({ email: email1 });
  if (f) {
    if (bcrypt.compareSync(password1, f.password)) {
      req.session.userId = f.email;
      res.redirect('/dashboard');
    } else {
      res.render('wrongpassword');
    }
  } else {
    res.redirect('/login');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.render('login');
});

module.exports = router;
