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

sql="DELETE FROM subject_teacher";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});

sql="DELETE FROM marks";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});

sql="DELETE FROM students";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});

sql="DELETE FROM grupo";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});

sql="DELETE FROM subjects";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});

sql="DELETE FROM teachers";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});

sql ="ALTER TABLE `codenotch`.`students` ADD COLUMN `anio_ingreso` DATE NULL AFTER `group_id`";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});

let marks = [['1', '1', '1', '2003-12-31', '8'],
                ['2', '2', '2', '2018-08-15', '4'],
                ['3', '3', '3', '2022-01-01', '6'],
                ['4', '4', '4', '2000-06-20', '3'],
                ['5', '5', '5', '2021-09-11', '5'],
                ['6', '6', '6', '2015-04-11', '7'],
                ['7', '7', '7', '1999-01-12', '1'],
                ['8', '8', '8', '2022-07-03', '5'],
                ['9',' 9', '9', '2021-10-20', '8'],
                ['10', '10', '10', '2010-03-04', '10']];

let student = [['1', 'Juan', 'Perez' , '1','2021-03-02'],
                    ['2', 'Jose', 'Garcia', '2','2022-06-04'],
                    ['3', 'Jacinto','Dom??nguez', '3','2020-06-14'],
                    ['4', 'Jesus', 'Cervantes', '4','2022-12-12'],
                    ['5', 'Javier', 'Reyes', '5','2000-06-25'],
                    ['6', 'Julia', 'de Vega??????', '6','1999-12-03'],
                    ['7', 'Judith', 'de Quevedo', '7','2012-03-04'],
                    ['8', 'Jimena', 'Machado', '8','2020-07-29'],
                    ['9', 'Jonas', 'Fuertes', '9','2021-11-12'],
                    ['10', 'Janet', 'Pineda', '10','2022-02-21']];

let teacherSubject =[['1', '10', '10'],
                        ['1', '9', '2'],
                        ['3', '8', '3'],
                        ['4', '7', '4'],
                        ['4', '6', '5'],
                        ['6', '5', '6'],
                        ['7', '4', '7'],
                        ['7', '3', '8'],
                        ['9', '2', '9'],
                        ['10', '1', '1']];

let subject = [['1', 'Javascript'],
                    ['2', 'Typescript'],
                    ['3', 'HTML'],
                    ['4', 'SQL'],
                    ['5', 'Node'],
                    ['6', 'Jquery'],
                    ['7', 'PHP'],
                    ['8', 'Java'],
                    ['9', 'Angular'],
                    ['10', 'Scrum']];

let teacher = [['1', 'Ana', 'Alvarez'],
                    ['2', 'Adolfo', 'Aguirre'],
                    ['3', 'Alba', 'Aguilar'],
                    ['4', 'Angeles', 'Aguilera'],
                    ['5', 'Antonio', 'Benitez'],
                    ['6', 'Aitor', 'Munoz'],
                    ['7', 'Agata', 'Gomez'],
                    ['8', 'Alvaro', 'Lopez'],
                    ['9', 'Abel', 'Garcia'],
                    ['10', 'Almudena', 'Silva']];

let grupo = [["1","A"],["2","B"],["3","C"],["4","D"],["5","E"],["6","F"],["7","G"],
            ["8","H"],["9","I"],["10","J"]];

sql = "INSERT INTO subjects VALUE?";
connection.query(sql,[subject],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Dato Insertado");
        console.log(result);
    }
});

sql = "INSERT INTO teachers VALUE?";
connection.query(sql,[teacher],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Dato Insertado");
        console.log(result);
    }
});

sql = "INSERT INTO grupo VALUE?";
connection.query(sql,[grupo],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Dato Insertado");
        console.log(result);
    }
});

sql = "INSERT INTO students VALUE?";
connection.query(sql,[student],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Dato Insertado");
        console.log(result);
    }
});

sql = "INSERT INTO marks VALUE?";
connection.query(sql,[marks],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Dato Insertado");
        console.log(result);
    }
});

sql = "INSERT INTO subject_teacher VALUE?";
connection.query(sql,[teacherSubject],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Dato Insertado");
        console.log(result);
    }
});


sql = "SELECT AVG(mark) FROM marks";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Resultado de tu busquedao");
        console.log(result);
    }
});

sql = "SELECT count(*) FROM students";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Resultado de tu busquedao");
        console.log(result);
    }
});

sql = "SELECT * FROM grupo";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Resultado de tu busquedao");
        console.log(result);
    }
});

// sql = "DELETE FROM marks WHERE mark > 5 AND (date < '2022-01-01' AND date > '2020-12-31')";
// connection.query(sql,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Resultado de tu busquedao");
//         console.log(result);
//     }
// });

sql = "SELECT * FROM students WHERE anio_ingreso > '2021-12-31'";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Resultado de tu busquedao");
        console.log(result);
    }
});

sql = "SELECT id_subject,COUNT(id_teacher) FROM subject_teacher GROUP BY id_subject";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Resultado de tu busquedao");
        console.log(result);
    }
});

//RETO2

sql = "SELECT mark_id,mark FROM marks WHERE (mark_id > 0 AND mark_id < 20) OR (mark > 8 AND date < '2022-01-01')";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Resultado de tu busquedao");
        console.log(result);
    }
});

sql = "SELECT subject_id,AVG(mark) FROM marks WHERE date > '2021-12-31' GROUP BY subject_id";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Resultado de tu busquedao");
        console.log(result);
    }
});

sql = "SELECT student_id,AVG(mark) FROM marks WHERE date > '2021-12-31' GROUP BY subject_id";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Resultado de tu busquedao");
        console.log(result);
    }
});





connection.end();