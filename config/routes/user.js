const express = require('express');
const jwt = require('express-jwt');
const config = require('../env');
const userCtrl = require('../../api/controllers/User');

const router = express.Router();
const secret = config.jwt.jwtSecret;

router.route('/')
  .get(jwt({ secret }), userCtrl.list)
  .post(userCtrl.create);

module.exports = router;
