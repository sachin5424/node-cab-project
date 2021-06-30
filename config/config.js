const mysql = require('mysql')

// console.log("ok",dotenv.env.PORT);

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"P@ssw0rd",
    database:"citycabs",
    port:"3306"
})
db.connect((error)=>{
    if(error){
        console.error("error connecting: "+error);
    }
    else{
        console.log('connected as mysql');
    }
})

module.exports = db