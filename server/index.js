const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./src/config/config')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session');
const indexRoute = require('./src/routes/index')
const postRoute = require('./src/routes/posts')
const userRoute = require('./src/routes/users')

app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: false}))


//EXPRESS SESSION
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

app.use('/posts', postRoute)
app.use('/users', userRoute)
// app.use('/index', indexRoute)

mongoose.connect(config.dbConnectionUrl, 
                { useNewUrlParser: true }
                )

app.listen((config.port), () => console.log(`Server started on port ${config.port}`))