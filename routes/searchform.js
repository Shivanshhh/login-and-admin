/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const Login = require('../models/schema');

router.get('/', (req, res) => {
  res.render('searchform', { results: [] });
});

router.post('/', async (req, res) => {
  const regex = new RegExp(`.*${req.body.search}.*`);
  const db = await Login.find({ name: regex });
  const db1 = db.map((element) => (element.name));
  //   const names = db
  //     .map((element) => (element.name))
  //     .filter((name) => (name.startsWith(name1)));
  res.render('searchform', { results: db1 });
});

module.exports = router;
