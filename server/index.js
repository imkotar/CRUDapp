const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./src/config/config');
const app = express();
const mongoose = require('mongoose');
const postRoute = require('./src/routes/posts')
const userRoute = require('./src/controllers/AuthenticationController')

app.use(bodyParser.json());
app.use(cors());

app.use('/posts', postRoute)
app.use('/users', userRoute)

mongoose.connect(config.dbConnectionUrl, 
                { useNewUrlParser: true }
                )

app.listen((config.port), () => console.log(`Server started on port ${config.port}`))