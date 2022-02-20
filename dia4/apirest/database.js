const mysql = require("mysql2");

let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Jose@12.",
        database : "codenotch"
    }
);

let sql;
let param;


//PRUEBA DE CONEXION DE LA BASE DE DATOS
connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexion correcta");
    }
})

module.exports = connection;