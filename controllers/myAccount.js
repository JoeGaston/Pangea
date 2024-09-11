

module.exports = {
    welcome: (req, res) => {
        res.render('myAccount.ejs',{
            // loggedIn: true,
            username: req.user.userName
        })
        console.log(req.user)
    }
}

