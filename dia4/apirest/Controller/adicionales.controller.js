const connection = require("../database");

//DEVUELVE LA MEDIA DE EL ALUMNO SELECCIONADO
function getMedia(request,response){
    if(request.query.id!="null"){
        param = [request.query.id];
        sql = "SELECT AVG(mark) AS media FROM marks WHERE student_id = ?";
        connection.query(sql,param,function(err,result){
            if(err){
                console.log(err);
            }else{
                response.send(result);
            }
        });
    }else{
        response.send("-1");
    }

    
}

//DEVUELVE LA ID, NOMBRE, APELLIDO Y ASIGNATURA DEUNA LISTA DE ALUMNOS
// O UNO EN PARTICULAR
function getApuntadas(request,response){
    if(request.query.id!=null){
        param = [request.query.id];
        sql = "SELECT s.id, s.first_name, s.last_name, sub.title FROM students AS s " +
        "JOIN subject_teacher AS st ON (s.group_id = st.group_id) "+
        "JOIN subjects AS sub ON (sub.id = st.id_subject) " +
        "WHERE s.id = ?";

        connection.query(sql,param,function(err,result){
            if(err){
                console.log(err);
            }else{
                response.send(result);
            }
        });
    }else{
        param=[];
        sql = "SELECT s.id, s.first_name, s.last_name, sub.title FROM students AS s " +
        "JOIN subject_teacher AS st ON (s.group_id = st.group_id) "+
        "JOIN subjects AS sub ON (sub.id = st.id_subject)";
        connection.query(sql,param,function(err,result){
            if(err){
                console.log(err);
            }else{
                response.send(result);
            }
        });
    }  
}

//DEVUELVE LA ID, NOMBRE, APELLIDO Y ASIGNATURA DEUNA LISTA DE PROFESORES
// O UNO EN PARTICULAR
function getImpartida(request,response){
    if(request.query.id!=null){
        param = [request.query.id];
        sql = "SELECT t.id, t.first_name, t.last_name, sub.title FROM subjects AS sub " +
        "JOIN subject_teacher AS st ON (sub.id = st.id_subject) " +
        "JOIN teachers AS t ON (st.id_teacher = t.id) " +
        "WHERE t.id = ?";
        connection.query(sql,param,function(err,result){
            if(err){
                console.log(err);
            }else{
                response.send(result);
            }
        });
    }else{
        param=[];
        sql = "SELECT t.id, t.first_name, t.last_name, sub.title FROM subjects AS sub " +
        "JOIN subject_teacher AS st ON (sub.id = st.id_subject) " +
        "JOIN teachers AS t ON (st.id_teacher = t.id)";
        connection.query(sql,param,function(err,result){
            if(err){
                console.log(err);
            }else{
                response.send(result);
            }
        });
    }  

}

module.exports = {getMedia,getApuntadas,getImpartida}