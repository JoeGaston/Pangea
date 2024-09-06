//! Requirements & Variables
const express = require('express')
const router = express.Router()
const createAccountController = require('../controllers/createAccount')
const authController = require('../controllers/auth')


//! Routes

router.get('/', createAccountController.createAccount) // actually on /createAccount/... (more things would go after slash)

router.post('/', authController.postNewAccount) // this is the function run in the controller


//! Export
module.exports = router