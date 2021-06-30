const {check} = require('express-validator')

exports.TripCategory_validator = [
    check("name","min length 3 characters").isLength({min:3}),
    check("icon","").isLength({max:256}),
    check("active"," only 0 and 1 ").isBoolean(),

]
exports.VihicleType = [
    check("name","min length 3 characters").isLength({min:3}),
    check("icon","").isLength({max:256}),
    check("active"," only 0 and 1 ").isBoolean(),
    check("name","min length 3 characters").isNumeric(),
    check("tripcategoryi_id","min length 3 characters").isNumeric(),
]
