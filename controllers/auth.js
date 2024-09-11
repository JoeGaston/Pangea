const passport = require('passport')
const validator = require('validator')
const User = require('../models/User') // connects to the user model


exports.postLogin = (req, res, next) => {
  const validationErrors = []
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
  if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })

  if (validationErrors.length) {
    req.flash('errors', validationErrors)
    return res.redirect('/')
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) {
      req.flash('errors', info)
      return res.redirect('/')
    }
    req.logIn(user, (err) => {
      if (err) { return next(err) }
      req.flash('success', { msg: 'Success! You are logged in.' })
      res.redirect(req.session.returnTo || '/myAccount') //if successful, do a get request through the myAccount route
    })
  })(req, res, next)
}


exports.postNewAccount = (req, res, next) => { // this is for validating and creating a new account.
    const validationErrors = []
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
    if (!validator.isLength(req.body.password, { min: 10 })) validationErrors.push({ msg: 'Password must be at least 10 characters long' })
    if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })
  
    if (validationErrors.length) {
      req.flash('errors', validationErrors)
      return res.redirect('../createAccount') //this needs to redirect to login page
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
  
    const user = new User({ // this is creating a user object 
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    })
  
    User.findOne({$or: [ 
      {email: req.body.email},
      {userName: req.body.userName}
    ]})
    .then ( async (err, existingUser) => {
      if (err) { return next(err) }
      if (existingUser) {
        req.flash('errors', { msg: 'Account with that email address or username already exists.' })
        return res.redirect('../createAccount')
      }
      await user.save()
        req.logIn(user, (err) => {
          if (err) {
            return next(err)
          }
          res.redirect('/') // this should route the user to their account page. (not yet created)
        })
    })
  }

  exports.logout = (req, res) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
} 