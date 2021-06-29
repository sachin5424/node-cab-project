const trip_category_modules = require('../moduls/TripCategory.moduls')
const {validationResult} = require('express-validator')

exports.trip_category_create = async (req,res) =>{
    try {
  
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"place validate fields ",
                errors:errors
            })
        }
        else{
           var CreateData = {
               name:req.body.name,
               icon:req.body.icon,
               active:req.body.active 
           }
        const data = await trip_category_modules.Create(CreateData)
        res.status(201).json({
            Data:data
        })
      }
    } catch (error) {
        res.status(501).send(error)
    }
}
exports.trip_category_update = async (req,res) =>{
    try {
  
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"place validate fields ",
                errors:errors
            })
        }
        else{
            var id = req.params.id;
           var CreateData = {
               name:req.body.name,
               icon:req.body.icon,
               active:req.body.active 
           }
        const data = await trip_category_modules.Update(id,CreateData)
        res.status(201).json({
            Data:data
        })
      }
    } catch (error) {
        res.status(501).send(error)
    }
}

exports.trip_category_list = async (req,res) =>{
    try {
        const data = await trip_category_modules.Find()
        res.status(201).json({
            Data:data
        })
    } catch (error) {
        res.status(501).send(error)
    }
}
exports.trip_category_Details = async (req,res) =>{
    try {
        var id = req.params.id;
        const data = await trip_category_modules.FindOne(id)
        res.status(201).json({
            Data:data
        })
    } catch (error) {
        res.status(501).send(error)
    }
}
exports.trip_category_Delete = async (req,res) =>{
    try {
        var id = req.params.id;
       
        const data = await trip_category_modules.Delete(id)
        res.status(201).json({
            Data:data
        })
    } catch (error) {
        res.status(501).send(error)
    }
}