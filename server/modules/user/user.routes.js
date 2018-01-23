const express = require('express');
const userCtrl = require( './user.controller');

const router = express.Router(); 
router.route('/')
/** Get list of users */
.get(userCtrl.list);

module.exports = router;