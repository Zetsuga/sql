const connection = require("../database");

function getSubjectTeacher(response,request){

    if(request.query.id!=null){
        param = [request.query.id];
        sql = "SELECT * FROM subject_Teacher AS st "+
        "JOIN subject AS sub ON (sub.id = s.id_subject) "+
        "JOIN students AS s ON (st.group_id = s.group_id) "+
        "WHERE s.id = ?";
    }else{
        param =[];
        sql = "SELECT * FROM subject_Teacher AS st "+
        "JOIN subject AS sub ON (sub.id = s.id_subject) "+
        "JOIN students AS s ON (st.group_id = s.group_id) ";
    }

    connection.query(sql,param,function(err,result){
        if(err){
            console.log(err);
        }else{
            response.send(result);
        }
    });
}

function nuevoSubjectTeacher(response,request){
    let temp = request.body;
    param = [temp.subjectId,temp.teacherId,temp.groupId];
    sql = "INSERT INTO subject_teacher(id_subject,id_teacher,group) VALUE ?"
    connection.query(sql,param,function(err,result){
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

function modificarSubjectTeacher(response, request){
    let temp = request.body;
    param = [temp.subjectId,temp.teacherId,temp.groupId,temp.id];
    sql = "UPDATE subject_treacher SET id_subject = COALESCE(?,id_subject), id_student = COALESCE(?,id_student), "+
    "group_id = COALESCE(?,group_id) WHERE id = ?";

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

function borrarSubjectTeacher(response, request){
    let temp = request.body;
    param = [temp.id];
    sql = "DELETE FROM subject_teacher WHERE id = ?";

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

module.exports ={getSubjectTeacher,modificarSubjectTeacher,borrarSubjectTeacher,nuevoSubjectTeacher};