const db = require('../config/config')


exports.Create = (data)=>{
    return new Promise((resolve,reject)=>{
        Query = `INSERT into vihicle_type set ?`
        db.query(Query,[data],(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:"try agin"
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
            }
        })
    })
}
exports.Find = ()=>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT  vihicle_type.id as id ,vihicle_type.name as name,vihicle_type.icon as icon,vihicle_type.active as active,trip_category.name as trip_category FROM vihicle_type  join trip_category on vihicle_type.tripcategoryi_id=trip_category.id where vihicle_type.is_deleted = '0'`
        db.query(Query,(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:"try agin"
                }
                reject(ErrorMessage)
            }
            else{
                data={

                }
                resolve(res)
            }
        })
    })
}
exports.FindOne = (id) =>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT vihicle_type.id as id,vihicle_type.name as name ,vihicle_type.icon as icon ,vihicle_type.active as active,vihicle_type.tripcategoryi_id as tripcategoryi_id  FROM vihicle_type WHERE id = ${id} and is_deleted = '0'`
        db.query(Query,(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:"try agin"
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
            }
        })
    })
}
exports.Delete = (id) =>{
    return new Promise((resolve,reject)=>{
        Query = `Update vihicle_type SET is_deleted ='1' WHERE id= ${id}`
        db.query(Query,(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:"try agin"
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
            }
        })
    })
}
exports.Update = (id,data) =>{
    return new Promise((resolve,reject)=>{
        Query = `Update vihicle_type SET ? WHERE id= ${id}`
        db.query(Query,[data],(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:"try agin"
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
            }
        })
    })
}