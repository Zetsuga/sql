const {Router} = require("express");
const subjectTeacherCtrl = require("../Controller/subjectTeacher.controller");

const app = Router();


//RUTAS SUBJECT_TEACHER
app.get("/alumnoAsignatura", subjectTeacherCtrl.getSubjectTeacher());
app.post("/alumnoAsignatura", subjectTeacherCtrl.nuevoSubjectTeacher);
app.put("/alumnoAsignatura", subjectTeacherCtrl.modificarSubjectTeacher());
app.delete("/alumnoAsignatura", subjectTeacherCtrl.borrarSubjectTeacher());


module.exports = app;