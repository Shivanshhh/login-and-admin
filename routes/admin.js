/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const Login = require('../models/schema');

router.get('/', async (req, res) => {
  const a = await Login.find({});
  res.render('admin', { users: a });
});

router.post('/delete', async (req, res) => {
  const k = req.body.userr;
  await Login.findByIdAndDelete(k);
  res.redirect('/admin');
});

router.post('/update', async (req, res) => {
  const d = req.body.userr1;
  const f = await Login.findById(d);
  res.render('update', { z: d, q: f });
});

router.post('/updated', async (req, res) => {
  const g = req.body.id;
  await Login.findByIdAndUpdate(g, {
    name: req.body.name1, mob: req.body.mob1, email: req.body.email1, password: req.body.password1,
  });
  res.redirect('/admin');
});

module.exports = router;
