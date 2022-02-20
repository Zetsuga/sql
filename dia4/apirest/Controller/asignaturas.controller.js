const connection = require("../database");

function getAsignatura(request,response){
    
    if(request.query.id!=null){
        param = [request.query.id];
        sql = "SELECT * FROM subjects WHERE id = ?";
    }else if(request.query.student_id!=null){
        param=[request.query.student_id];
        sql="SELECT * FROM subjects AS sub "+
        "JOIN subject_teacher AS st ON (sub.id = st.id_subject) "+
        "JOIN students AS s ON (s.group_id = st.group_id) "+
        "WHERE s.id = ?"
    }else{
        param = [];
        sql = "SELECT * FROM subjects";
    }

    
    connection.query(sql,param,function(err,result){
        if(err){
            console.log(err);
        }else{
            response.send(result);
        }
    });
}

function guardarAsignatura(request,response){
    let temp = request.body; 
    
    param = [temp.title]
    sql = "INSERT INTO subjects(title) VALUE (?)";

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

function modificarAsignatura(request,response){
    let temp = request.body; 
    
    param = [temp.title,temp.id]
    sql = "UPDATE subjects SET title = COALESCE(?,title) WHERE id = ?";

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

function borrarAsignatura(request,response){
    let temp = request.body; 

    param = [temp.id]
    sql = "DELETE FROM subjects WHERE id = ?";

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

module.exports = {getAsignatura,guardarAsignatura,modificarAsignatura,borrarAsignatura}