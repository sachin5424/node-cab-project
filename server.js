const express = require('express')
const app = express()
const cors = require('cors')
const BodyParser = require("body-parser").json()
const db = require('./config/config')
const Port = 3004
const ip ="125.63.96.178"
app.use(cors())
app.use(BodyParser)


const TripCategory_router = require('./router/TripCategory.router')

app.use('/trip-category',TripCategory_router)


app.listen(Port)