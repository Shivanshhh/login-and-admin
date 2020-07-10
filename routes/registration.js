/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const Login = require('../models/schema');

router.get('/', (req, res) => {
  res.render('registration');
});

router.post('/', async (req, res) => {
  await Login.create(req.body);
  res.redirect('/login');
});

module.exports = router;
