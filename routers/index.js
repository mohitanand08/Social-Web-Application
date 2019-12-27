// It fetches the existing express does not creates a new express
const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_Controller');
// Router is accessing the home Controller
router.get('/', homeController.home);
router.use('/users', require('./users'));
module.exports = router;
