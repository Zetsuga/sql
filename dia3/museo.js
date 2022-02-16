let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Jose@12.",
        database : "museo"
    }
);

let sql="";


arr=["prestamo"];
sql = "SELECT p.nombre,col.nombre,pr.devolucion,pro.nombre,pro.apellido,pro.email FROM pieza AS p " +
        "JOIN propiedad AS pr ON (p.propiedad_id = pr.id) " +
        "JOIN coleccion AS col ON (p.coleccion_id = col.id) " +
        "JOIN propietario AS pro ON (p.propietario_id = pro.id) " +
        "WHERE pr.tipo = ? ";

connection.query(sql,[arr],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Busqueda realizada");
        console.log(result);
    }
});

arr=[];
sql = "SELECT c.nombre,COUNT(*) AS cantidad FROM pieza AS p " +
        "JOIN coleccion AS c ON (p.coleccion_id = c.id) " +
        "GROUP BY c.tipo " +
        "ORDER BY cantidad DESC";
        
connection.query(sql,[arr],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Dato Insertado");
        console.log(result);
    }
});

connection.end();