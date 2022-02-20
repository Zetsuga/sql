const connection = require("../database");

function getProfesores(request,response){
    if(request.query.id!=null){
        param = [request.query.id];
        sql = "SELECT * FROM teachers WHERE id = ?";
    }else{
        param = [];
        sql = "SELECT * FROM teachers";
    }

    connection.query(sql,param,function(err,result){
        if(err){
            console.log(err);
        }else{
            response.send(result);
        }
    });
}

function guardarProfesor(request,response){
    let temp = request.body; 

    param = [temp.firstName,temp.lastName]
    sql = "INSERT INTO teachers(first_name,last_name) VALUE (?)";

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

function modificarProfesor(request,response){
    let temp = request.body; 

    param = [temp.firstName,temp.lastNametemp,temp.id]
    sql = "UPDATE teachers SET first_name = COALESCE(?,first_name), last_name = COALESCE(?,last_name) " + 
    " WHERE id = ?";

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

function borrarProfesor(request,response){
    let temp = request.body; 

    param = [temp.id]
    sql = "DELETE FROM teachers WHERE id = ?";

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

module.exports = {getProfesores,guardarProfesor,modificarProfesor,borrarProfesor}