const express = require('express');
const jwt = require('express-jwt');
const bookCtrl = require('../../api/controllers/Book');

const router = express.Router();

router.route('/')
    .get(bookCtrl.list);

router.route('/new')
    .post(bookCtrl.create)

module.exports = router;
