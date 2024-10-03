//! Requirements & Variables
const express = require('express')
const router = express.Router()
const createAccountController = require('../controllers/createaccount')
const authController = require('../controllers/auth')
// const { ensureAuth, ensureGuest } = require('../middleware/auth')


//! Routes

router.get('/', createAccountController.createaccount) // actually on /createAccount/... (more things would go after slash)

router.post('/', authController.postNewAccount) // this is the post account from the user submitting the button to create account.


//! Export
module.exports = router