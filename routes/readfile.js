/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const path = require('path');
const Login = require('../models/schema');

const redirectadmin = async (req, res, next) => {
  if (!req.session.userId) {
    res.render('notloggedin');
  } else {
    const b = await Login.findOne({ email: req.session.userId });
    const g = b.admin;
    if (g === '1') {
      next();
    } else {
      res.render('adminerror');
    }
  }
};

router.get('/', redirectadmin, (req, res) => {
  res.sendFile(path.join(__dirname, (req.query.filename)));
});

module.exports = router;
