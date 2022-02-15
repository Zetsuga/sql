let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Jose@12.",
        database : "codenocht"
    }
);
let sql = ""

sql = "CREATE TABLE `codenotch`.`students` (`id` INT NOT NULL AUTO_INCREMENT,`firtst_name` VARCHAR(45) NULL"
+ ",`last_name` VARCHAR(45) NULL,`email` VARCHAR(45) NULL,`tlf` VARCHAR(45) NULL,PRIMARY KEY (`id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

sql = "CREATE TABLE `codenotch`.`subjects` (`id` INT NOT NULL AUTO_INCREMENT,`title` VARCHAR(45) NULL,`group` VARCHAR(45) NULL,PRIMARY KEY (`id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

sql = "CREATE TABLE `codenotch`.`teachers` (`id` INT NOT NULL AUTO_INCREMENT,`first_name` VARCHAR(45) NULL,`last_name` VARCHAR(45) NULL,PRIMARY KEY (`id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

sql = "CREATE TABLE `codenotch`.`student_subject` (`id` INT NOT NULL AUTO_INCREMENT,`id_subject` INT NOT NULL,`id_teacher` INT NOT NULL,PRIMARY KEY (`id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});

sql = "CREATE TABLE `codenotch`.`subject_teacher` (`id` INT NOT NULL AUTO_INCREMENT,`id_subject` INT NOT NULL,`id_teacher` INT NOT NULL,PRIMARY KEY (`id`))";

connection.query(sql, function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada");
        console.log(result);
    }
});


sql = "DROP TABLE `codenotch`.`student_subject`";
connection.query(sql,function(err,result){
    if(err) throw err;
    console.log("Tabla eliminada");
})


sql = "ALTER TABLE `codenotch`.`students` DROP COLUMN `tlf`,DROP COLUMN `email`";
connection.query(sql,function(err,result){
    if(err) throw err;
    console.log("Tabla Actualizada");
})

sql = "ALTER TABLE `codenotch`.`students` ADD COLUMN `edad` INT NULL AFTER `last_name`";
connection.query(sql,function(err,result){
    if(err) throw err;
    console.log("Tabla Actualizada");
})

connection.end();