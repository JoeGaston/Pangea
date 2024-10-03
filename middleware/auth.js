module.exports = {
    ensureAuth: function (req, res, next) {
      console.log('hello')
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    }
  }
  