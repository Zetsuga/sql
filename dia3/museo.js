let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Jose@12.",
        database : "codenotch"
    }
);

let sql="";


arr=[];
sql = "SELECT p.nombre,pe.devolucion, au.nombre, au.apellido,au.email,it.nombre "+
        "AS itinerante,per.nombre AS Permanente,alm.nombre AS almacen FROM pieza AS p "+
        "JOIN prestamo AS pe ON (p.id = pe.pieza_id) "+
        "JOIN propietario AS au ON (p.id = au.pieza_id) "+
        "LEFT JOIN itinerante AS it ON (it.id = p.itinerante_id) "+
        "LEFT JOIN permanente AS per ON (per.id = p.permanente_id) "+
        "LEFT JOIN almacenada AS alm ON (alm.id = p.almacenada_id)";

connection.query(sql,[arr],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Dato Insertado");
        console.log(result);
    }
});

arr=[];
sql = "SELECT permanente_id,itinerante_id,almacenada_id,COUNT(*) AS contador FROM pieza AS p " +
"LEFT JOIN itinerante AS it ON (it.id = p.itinerante_id) " +
"LEFT JOIN permanente AS per ON (per.id = p.permanente_id) " +
"LEFT JOIN almacenada AS alm ON (alm.id = p.almacenada_id) " +
"GROUP BY permanente_id, itinerante_id,almacenada_id " +
"ORDER BY contador DESC";
        
connection.query(sql,[arr],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Dato Insertado");
        console.log(result);
    }
});

connection.end();