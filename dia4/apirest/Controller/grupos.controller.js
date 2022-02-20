const connection = require("../database");

function getGrupos(request,response){
    if(request.query.id!=null){
        param = [request.query.id];
        sql = "SELECT * FROM grupo WHERE id = ?";
    }else{
        param = [];
        sql = "SELECT * FROM grupo";
    }

    connection.query(sql,param,function(err,result){
        if(err){
            console.log(err);
        }else{
            response.send(result);
        }
    });
}

function guardarGrupo(request,response){
    let temp = request.body; 

    param = [temp.name]
    sql = "INSERT INTO grupo(name) VALUE (?)";

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

function modificarGrupo(request,response){
    let temp = request.body; 

    param = [temp.name,temp.id]
    sql = "UPDATE grupo SET name = COALESCE(?,name) WHERE id = ?";

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

function borrarGrupo(request,response){
    let temp = request.body; 

    param = [temp.id]
    sql = "DELETE FROM grupo WHERE id = ?";

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

module.exports = {getGrupos,guardarGrupo,borrarGrupo,modificarGrupo}