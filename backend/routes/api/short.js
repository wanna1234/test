const express = require('express');
const router = express.Router();
const eventController = require('../../controllers/shortController');
// const passport = require('passport');
// const middleware = require('../../../config/middleware');

router.post(
  '/addurl',
  eventController.shorturl
);
module.exports = router;
