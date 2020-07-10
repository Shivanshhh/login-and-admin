/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  req.session.destroy();
  res.render('login');
});

module.exports = router;
