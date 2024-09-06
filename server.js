//! Create environmental requirements
const express = require('express') // allows server to use express
const mongoose = require('mongoose') // require mongoose
const cors = require('cors')
require('dotenv').config() // allows us to read data from the dotenv fileclea
const methodOverride = require('method-override') // allows us to update/delete on post request
const app = express() // stores the express function in a varibale called app, initializes express
const port = process.env.PORT || 4000 //pulls the PORT variable from the .env file and declares a back up
const passport = require('passport') // this is how we use passport js
const session = require('express-session')
//const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')



//! Middleware - this must be in the right sequence, cant be ahead of request

app.use(cors()) //cross-origin security. bypasses security in browsers
app.use(express.static('views')) // allows us to serve static files. Tells server where the static files are located
app.use(express.urlencoded({extended: true})) // help server read incoming requests. Parse requests for strings/arrays
app.use(methodOverride('method'))
app.use(express.json()) // help server read incoming requests. Parse requests with JSON 
app.set('view engine', 'ejs') // sets EJS at the templating engine for the project. tells server to send stuff to views folder



//! Connection to Database - currently using MONGODB
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.d4i0f.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`)

.then(() => console.log('Connected to MongoDB / Pangea DB'))
.catch(err => console.log(err))



//! Router

const mainRoute = require('./routes/main') // declares the locations of the route to be used
app.use('/', mainRoute) // This will route them to the loginRoute Route


const createAccountRoute = require('./routes/createAccount') // declares the locations of the route to be used
app.use('/createAccount', createAccountRoute) // if user tries to access this route - use that router









//! App needs to be listening to start server
app.listen(port, ()=>{ 
    console.log(`Server running on port ${port}`) 
})