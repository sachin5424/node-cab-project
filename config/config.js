const mysql = require('mysql')
const dotenv = require('dotenv');
dotenv.config();


const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER ,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
    port:process.env.DATABASE_PORT,
})
db.connect((error)=>{
    if(error){
        console.error("error connecting: "+error);
    }
    else{
        console.log('connected database server');
    }
})

module.exports = db