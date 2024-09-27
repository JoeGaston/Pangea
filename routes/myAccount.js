//! Requirements & Variables
const express = require('express')
const router = express.Router()
const myAccountController = require('../controllers/myAccount')
const { ensureAuth } = require('../middleware/auth')
// const authController = require('../controllers/auth')

//! Routes

router.get('/', ensureAuth, myAccountController.welcome) // Sends user to their account page






//! exports

module.exports = router