const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookParser = require('cookie-parser')
const userRoute = require('./user')
app.use(bodyParser.json())
app.use(cookParser())
app.use('/user', userRoute)
app.listen(9093)
