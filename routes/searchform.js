/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const Login = require('../models/schema');

router.get('/', (req, res) => {
  res.render('searchform', { results: [] });
});

router.post('/', async (req, res) => {
  const name1 = req.body.search;
  const db = await Login.find({});

  const names = db
    .map((element) => (element.name))
    .filter((name) => (name.startsWith(name1)));
  res.render('searchform', { results: names });
});

module.exports = router;
