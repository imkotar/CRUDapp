const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./src/config/config')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const session = require('express-session');
const flash = require('connect-flash');
const indexRoute = require('./src/routes/index')
const postRoute = require('./src/routes/posts')
const userRoute = require('./src/routes/users')

//Password config
require('./src/config/passport')(passport)

app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: false}))

//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

//EXPRESS SESSION
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );



// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.use('/posts', postRoute)
app.use('/users', userRoute)
// app.use('/index', indexRoute)

mongoose.connect(config.dbConnectionUrl, 
                { useNewUrlParser: true }
                )

app.listen((config.port), () => console.log(`Server started on port ${config.port}`))