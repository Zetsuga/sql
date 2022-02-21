const connection = require("../database");

function getAlumnos(request,response){
    
    if(request.query.id!=null){
        param = [request.query.id];
        sql = "SELECT s.id,s.first_name,s.last_name, s.anio_ingreso , g.name  FROM students AS s "+
        "JOIN grupo AS g ON (s.group_id =  g.id) WHERE s.id = ?";
    }else{
        param = [];
        sql = "SELECT s.id,s.first_name,s.last_name, s.anio_ingreso , g.name FROM students AS s "+
        "JOIN grupo AS g ON (s.group_id =  g.id)";
    }
    connection.query(sql,param,function(err,result){
        if(err){
            console.log(err);
        }else{
            response.send(result);
        }
    });
}

function guardarAlumno(request,response){
    let temp = request.body; 
    param = [temp.firstName,temp.lastName,temp.groupId,temp.anioIngreso]
    sql = "INSERT INTO students(first_name,last_name,group_id,anio_ingreso) VALUE (?)";

    connection.query(sql,[param],function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result.insertId){
                response.send(String(result.insertId))
            }else{
                response.send("-1")
            }
        }
    });
}

function modificarAlumno(request,response){
    let temp = request.body; 

    param = [temp.firstName,temp.lastName,temp.groupId,temp.anioIngreso,temp.id]
    sql = "UPDATE students SET first_name = COALESCE(?,first_name), last_name = COALESCE(?,last_name), " + 
    "group_id = COALESCE(?,group_id), anio_ingreso = COALESCE(?,anio_ingreso) WHERE id = ?";

    connection.query(sql,param,function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result.affectedRows){
                response.send(String(result.affectedRows))
            }else{
                response.send("-1")
            }
        }
    });

}

function borrarAlumno(request,response){
    let temp = request.body; 

    param = [temp.id]
    sql = "DELETE FROM students WHERE id = ?";

    connection.query(sql,param,function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result.affectedRows){
                response.send(String(result.affectedRows))
            }else{
                response.send("-1")
            }
        }
    });

}


module.exports ={getAlumnos,guardarAlumno,modificarAlumno,borrarAlumno}