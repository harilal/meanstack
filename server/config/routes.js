const express = require('express');
const userRoutes = require( '../modules/user/user.routes');


const router = express.Router(); 

// user routes
router.use('/users', userRoutes);


module.exports = router;