module.exports = {
    welcome: (req, res) => {
        res.render('admin.ejs',{
            // loggedIn: true,
            // username: req.user.userName,
            // role: req.user.role
        })
        console.log(req.user)
    }
}