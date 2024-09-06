//! Requirements & Variables
const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')


//! Routes
router.get('/', mainController.getIndex)




//! Export
module.exports = router