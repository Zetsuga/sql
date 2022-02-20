class Notas{

    constructor(student_id, subject_id, date, mark){
        this.studentId = student_id;
        this.subjectId = subject_id;
        this.mark = mark;
        this.date = date;
    }
}

function buscarNota(){
    let id = document.getElementById("indice").value;
    let contenedor = document.getElementById("nota_busqueda");
    let url ="";

    if(id==="null"){
        url =`http://127.0.0.1:3000/notas`;
    }else{
        url =`http://127.0.0.1:3000/notas?id=${id}`;
    }

    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{

        let tabla=`<table class="table tablaCodenotch table-striped table-hover">
                <thead>
                    <td scope="col">Índice</td>
                    <td scope="col">Nombre</td>
                    <td scope="col">Asignatura</td>
                    <td scope="col">Nota</td>
                    <td scope="col">Fecha</td>
                </thead>
                <tbody>`;

        for(let i=0; i<datos.length;i++){
            let date = new Date(datos[i].date);
            let fecha = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

            tabla+= `<tr>
            <td class="texto_fila">${datos[i].mark_id}</td>
            <td class="texto_fila">${datos[i].first_name}</td>
            <td class="texto_fila">${datos[i].title}</td>
            <td class="texto_fila">${datos[i].mark}</td>
            <td class="texto_fila">${fecha}</td>
            </tr>`;
        }

        tabla +=`</tbody>
        </table>`;

        contenedor.innerHTML =tabla;

        if(datos.length === 0 ){
            crearToast("Notas del alumno no encontrada","Busqueda erronea","red");
        }else{
            crearToast("Notas del alumno encontrada con exito","Busqueda satisfactoria","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function insertarNota(){
    let notas = datosNotas();
    if(notas === null){
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }else{
        let url =`http://127.0.0.1:3000/notas`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(notas),
            method : "POST" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Calificación no guardada","Fallo","red");
            }else{
                crearToast("Calificación guardada con exito","Guardado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

function modificarNota(){
    let fecha;
    if(document.getElementById("fecha").value != ""){
        let date = new Date(document.getElementById("fecha").value); 
        fecha = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }else{
        fecha =null;
    }
    
    let nota = {
        "id" : document.getElementById("idnota").value,
        "studentId" :document.getElementById("indice").value,
        "subjectId" :  document.getElementById("asignatura").value,
        "mark" :  document.getElementById("nota").value,
        "date" :  fecha
    }
    
    let url =`http://127.0.0.1:3000/notas`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(nota),
        method : "PUT" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        
        if(datos ===  -1){
            crearToast("Calificación no modificada","Fallo","red");
        }else{
            crearToast("Calificación modificada con exito","Modificado","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function eliminarNota(){
    if(document.getElementById("indice").value != ""){
        let nota = {
            "id" : document.getElementById("indice").value
        }
        
        let url =`http://127.0.0.1:3000/notas`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(nota),
            method : "DELETE" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Calificación no borrada","Fallo","red");
            }else{
                crearToast("Calificación Borrada con exito","Borrado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }
    
}



function datosNotas(){
    let element;
    let correcto = true;

    if(document.getElementById("indice").value == null){
        element = document.getElementById("indice");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("asignatura").value == null){
        element = document.getElementById("asignatura");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("nota").value == ""){
        element = document.getElementById("nota");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("fecha").value == ""){
        element = document.getElementById("fecha");
        element.classList.toggle("errorCampo");
        correcto = false;
    } 
    
    if(correcto){
        let nota =  document.getElementById("nota").value; 
        let date =  new Date(document.getElementById("fecha").value); 
        let fecha = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        let calificacion = new Notas(document.getElementById("indice").value,
            document.getElementById("asignatura").value,fecha,nota);
        return calificacion;
    }else{
        return null;
    } 
}