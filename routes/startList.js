//! Requirements & Variables
const express = require('express')
const router = express.Router()
const startListController = require('../controllers/startList')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//! Routes
router.get('/', startListController.startList)

//! exports

module.exports = router