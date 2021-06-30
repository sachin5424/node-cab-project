const db = require('../moduls/VihicleType.moduls')
const {validationResult} = require('express-validator')


exports.vihicle_type_create = async (req,res) =>{
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
            active:req.body.active,
            price_km:req.body.price_km,
            tripcategoryi_id:req.body.tripcategoryi_id
           }
        const data = await db.Create(CreateData)
        res.status(201).json({
            Data:data
        })
      }
    } catch (error) {
        res.status(501).send(error)
    }
}
// exports.trip_category_update = async (req,res) =>{
//     try {
  
//         const errors = validationResult(req)
//         if(!errors.isEmpty()){
//             return res.status(400).json({
//                 message:"place validate fields ",
//                 errors:errors
//             })
//         }
//         else{
//             var id = req.params.id;
//         //    var CreateData = {
//         //        name:req.body.name,
//         //        icon:req.body.icon,
//         //        active:req.body.active 
//         //    }
//         const data = await trip_category_modules.Update(id,req.body)
//         res.status(201).json({
//             Data:data
//         })
//       }
//     } catch (error) {
//         res.status(501).send(error)
//     }
// }

exports.vihicle_type_list = async (req,res) =>{
    try {
        console.log('ok');
     
        const data = await db.Find()
        console.log(data);
        res.status(201).json({
            Data:data
        })
    } catch (error) {
        res.status(501).send(error)
    }
}

exports.vihicle_type_Details = async (req,res) =>{
    try {
        var id = req.params.id;
        const data = await db.FindOne(id)
        res.status(201).json({
            Data:data
        })
    } catch (error) {
        res.status(501).send(error)
    }
}
exports.vihicle_type_Delete = async (req,res) =>{
    try {
        var id = req.params.id;
        console.log('ok');
        const data = await db.Delete(id)
        res.status(201).json({
            Message:"Delete item"
           
        })
    } catch (error) {
        res.status(501).send(error)
    }
}