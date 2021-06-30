const router = require('express').Router()
const TripCategory_Controller = require('../controller /TripCategory.Controller')
const Validation = require('../validation/validation')

router.get('/',TripCategory_Controller.trip_category_list)
router.post('/',Validation.TripCategory_validator,TripCategory_Controller.trip_category_create)
router.post('/:id',TripCategory_Controller.trip_category_update)
router.get('/:id',TripCategory_Controller.trip_category_Details)
router.get('/delete/:id',TripCategory_Controller.trip_category_Delete)

module.exports = router