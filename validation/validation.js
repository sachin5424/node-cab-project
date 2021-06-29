const {check} = require('express-validator')

exports.TripCategory_validator = [
    check("name","min length 3 characters").isLength({min:3}),
    check("icon","").is({max:256}),
    check("active"," only 0 and 1 ").isBoolean(),

]