let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Jose@12.",
        database : "codenotch"
    }
);

//RETO 2

// let marks = [['1', '1', '1', '2003-12-31', '8'],
//                 ['2', '2', '2', '2018-08-15', '4'],
//                 ['3', '3', '3', '2020-01-01', '6'],
//                 ['4', '4', '4', '2000-06-20', '3'],
//                 ['5', '5', '5', '2011-09-11', '5'],
//                 ['6', '6', '6', '2015-04-11', '7'],
//                 ['7', '7', '7', '1999-01-12', '1'],
//                 ['8', '8', '8', '1990-07-03', '5'],
//                 ['9',' 9', '9', '2021-10-20', '8'],
//                 ['10', '10', '10', '2010-03-04', '10']];

// let student = [['1', 'Juan', 'Perez' , '1'],
//                     ['2', 'Jose', 'Garcia', '2'],
//                     ['3', 'Jacinto','Domínguez', '3'],
//                     ['4', 'Jesus', 'Cervantes', '4'],
//                     ['5', 'Javier', 'Reyes', '5'],
//                     ['6', 'Julia', 'de Vega​​', '6'],
//                     ['7', 'Judith', 'de Quevedo', '7'],
//                     ['8', 'Jimena', 'Machado', '8'],
//                     ['9', 'Jonas', 'Fuertes', '9'],
//                     ['10', 'Janet', 'Pineda', '10']];

// let teacherSubject =[['1', '10', '10'],
//                         ['2', '9', '2'],
//                         ['3', '8', '3'],
//                         ['4', '7', '4'],
//                         ['5', '6', '5'],
//                         ['6', '5', '6'],
//                         ['7', '4', '7'],
//                         ['8', '3', '8'],
//                         ['9', '2', '9'],
//                         ['10', '1', '1']];

// let subject = [['1', 'Javascript'],
//                     ['2', 'Typescript'],
//                     ['3', 'HTML'],
//                     ['4', 'SQL'],
//                     ['5', 'Node'],
//                     ['6', 'Jquery'],
//                     ['7', 'PHP'],
//                     ['8', 'Java'],
//                     ['9', 'Angular'],
//                     ['10', 'Scrum']];

// let teacher = [['1', 'Ana', 'Alvarez'],
//                     ['2', 'Adolfo', 'Aguirre'],
//                     ['3', 'Alba', 'Aguilar'],
//                     ['4', 'Angeles', 'Aguilera'],
//                     ['5', 'Antonio', 'Benitez'],
//                     ['6', 'Aitor', 'Munoz'],
//                     ['7', 'Agata', 'Gomez'],
//                     ['8', 'Alvaro', 'Lopez'],
//                     ['9', 'Abel', 'Garcia'],
//                     ['10', 'Almudena', 'Silva']];

// let grupo = [["1","A"],["2","B"],["3","C"],["4","D"],["5","E"],["6","F"],["7","G"],
//             ["8","H"],["9","I"],["10","J"]];

// sql = "INSERT INTO subjects VALUE?";
// connection.query(sql,[subject],function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato Insertado");
//         console.log(result);
//     }
// });

// sql = "INSERT INTO teachers VALUE?";
// connection.query(sql,[teacher],function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato Insertado");
//         console.log(result);
//     }
// });

// sql = "INSERT INTO grupo VALUE?";
// connection.query(sql,[grupo],function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato Insertado");
//         console.log(result);
//     }
// });

// sql = "INSERT INTO students VALUE?";
// connection.query(sql,[student],function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato Insertado");
//         console.log(result);
//     }
// });

// sql = "INSERT INTO marks VALUE?";
// connection.query(sql,[marks],function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato Insertado");
//         console.log(result);
//     }
// });

// sql = "INSERT INTO subject_teacher VALUE?";
// connection.query(sql,[teacherSubject],function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato Insertado");
//         console.log(result);
//     }
// });

// sql = "UPDATE marks SET mark=0";
// connection.query(sql,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// })

// sql = "SELECT first_name,last_name FROM students";
// connection.query(sql,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// })

// sql = "SELECT * FROM teachers";
// connection.query(sql,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// })

//RETO 3

// sql = "DELETE FROM marks where date < '2012-01-01'";
// connection.query(sql,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// })

// sql = "UPDATE marks set mark=5 WHERE mark<5";
// connection.query(sql,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// })


connection.end();