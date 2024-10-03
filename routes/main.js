//! Requirements & Variables
const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')
const authController = require('../controllers/auth')
const { ensureAuth } = require('../middleware/auth')


//! Routes
router.get('/', mainController.getIndex)

router.post('/myaccount', authController.postLogin) // this should be the action attribute from the ejs file.

router.post('/logout', ensureAuth, authController.logout )




//! Export
module.exports = router