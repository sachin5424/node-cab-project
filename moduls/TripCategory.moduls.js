const db = require('../config/config')

exports.Create = (data)=>{
    return new Promise((resolve,reject)=>{
        Query = `INSERT into trip_category set ?`
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
        Query = `SELECT * FROM trip_category WHERE is_deleted = '0'`
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

exports.FindOne = (id) =>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT * FROM trip_category WHERE id = ${id} and is_deleted = '0'`
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
        Query = `Update trip_category SET is_deleted ='1' WHERE id= ${id}`
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
        Query = `Update trip_category SET ? WHERE id= ${id}`
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