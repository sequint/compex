const router = require('express').Router();
const { User } = require('../models');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { json } = require('express');

// Login route
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err); }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null);
  });
});
