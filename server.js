require('dotenv').config();

const express = require('express');

const syncDB = require('./db');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS without external module
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(require('./routes'));

// Call the syncDB method form db foder to sync with database, then turn on database.
syncDB()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err));
