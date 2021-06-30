const express = require('express')
const app = express()
const cors = require('cors')
const BodyParser = require("body-parser").json()
const db = require('./config/config')

const dotenv = require('dotenv');
dotenv.config();
app.use(cors())
app.use(BodyParser)


const TripCategory_router = require('./router/TripCategory.router')
const VihicleType_router = require('./router/VihicleType.router')

app.use('/trip-category',TripCategory_router)
app.use('/vihicle-type',VihicleType_router)


app.listen(process.env.PORT,()=>{
    console.log('http://localhost:'+process.env.PORT);
})