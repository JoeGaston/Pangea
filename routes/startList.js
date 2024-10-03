//! Requirements & Variables
const express = require('express')
const router = express.Router()
const startListController = require('../controllers/startlist')
const { ensureAuth } = require('../middleware/auth')

//! Routes
router.get('/', startListController.startlist)

//! exports

module.exports = router