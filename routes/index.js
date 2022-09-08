const router = require('express').Router();

router.use('/', require('./itemRoutes.js'));

module.exports = router;
