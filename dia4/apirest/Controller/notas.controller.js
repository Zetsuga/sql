const connection = require("../database");

function getNotas(request,response){

    if(request.query.student_id!=null || request.query.id!=null){
        param = [request.query.id];
        sql = "SELECT * FROM marks AS m "+
        "JOIN students AS s ON (s.id = m.student_id) "+
        "JOIN subjects AS sub ON (sub.id = m.subject_id) WHERE student_id = ?";
    }else{
        param = [];
        sql = "SELECT * FROM marks AS m "+
        "JOIN students AS s ON (s.id = m.student_id) "+ 
        "JOIN subjects AS sub ON (sub.id = m.subject_id)";
    }

    connection.query(sql,param,function(err,result){
        if(err){
            console.log(err);
        }else{
            response.send(result);
        }
    });
}

function guardarNotas(request,response){
    let temp = request.body; 
console.log(temp)
    param = [temp.studentId,temp.subjectId,temp.date,temp.mark]
    sql = "INSERT INTO marks(student_id,subject_id,date,mark) VALUE (?)";

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

function modificarNotas(request,response){
    let temp = request.body; 

    param = [temp.studentId,temp.subjectId,temp.date,temp.mark,temp.id]
    sql = "UPDATE marks SET student_id = COALESCE(?,student_id), " + 
    "subject_id = COALESCE(?,subject_id), date = COALESCE(?,date), mark = COALESCE(?,mark) WHERE Mark_id = ?";

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

function borrarNotas(request,response){
    let {id} = request.body; 
    param = [id];

    sql = "DELETE FROM marks WHERE mark_id = ?";

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

module.exports = {getNotas,guardarNotas,modificarNotas,borrarNotas};