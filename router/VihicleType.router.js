const router = require('express').Router()
const VihicleType_Controller = require('../controller /VihicleType.Controller')
const Validation = require('../validation/validation')

router.get('/',VihicleType_Controller.vihicle_type_list)
router.post('/',VihicleType_Controller.vihicle_type_create)
// router.post('/:id',VihicleType_Controller.vihicle_type_Update)
router.get('/delete/:id',VihicleType_Controller.vihicle_type_Delete)
router.get('/:id',VihicleType_Controller.vihicle_type_Details)

module.exports = router