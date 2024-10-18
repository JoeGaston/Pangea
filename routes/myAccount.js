//! Requirements & Variables
const express = require('express')
const router = express.Router()
const myAccountController = require('../controllers/myaccount')
const { ensureAuth } = require('../middleware/auth')
// const authController = require('../controllers/auth')

//! Routes
router.use(ensureAuth) // This will be applied to ALL following routing

router.get('/', myAccountController.welcome) // Sends user to their account page

router.get('/admin', myAccountController.admin)

router.post('/admin', myAccountController.addOrganism)






//! exports

module.exports = router