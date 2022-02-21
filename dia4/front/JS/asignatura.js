class Asignatura{
    constructor(title){
        this.title = title;
    }
}

function buscarAsignatura(){
    let id = document.getElementById("indice").value;
    let contenedor = document.getElementById("asignatura_busqueda");
    
    let url =""
    if(id===""){
        url =`http://127.0.0.1:3000/asignaturas`;
    }else{
        url =`http://127.0.0.1:3000/asignaturas?id=${id}`;
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
                    <td scope="col">Título</td>
                </thead>
                <tbody>`;

        for(let i=0; i<datos.length;i++){
            tabla+= `<tr>
            <td class="texto_fila">${datos[i].id}</td>
            <td class="texto_fila">${datos[i].title}</td>
            </tr>`;
        }

        tabla +=`</tbody>
        </table>`;

        contenedor.innerHTML =tabla;

        if(datos.length === 0 ){
            console.log(datos.length);
            crearToast("Asignatura no encontrada","Busqueda erronea","red");
        }else{
            crearToast("Asignatura encontrada con exito","Busqueda satisfactoria","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function insertarAsignatura(){
    let asignatura = datosAsignatura();
    if(asignatura === null){
        
    }else{
        let url =`http://127.0.0.1:3000/asignaturas`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(asignatura),
            method : "POST" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Asignatura no guardada","Fallo","red");
            }else{
                crearToast("Asignatura guardada con exito","Guardado","green")
            }
            console.log(datos);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

function modificarAsignatura(){
    let asignatura = {
        "id" : document.getElementById("indice").value,
        "title" : (document.getElementById("titulo").value=="")?null:document.getElementById("titulo").value
    }
    
    let url =`http://127.0.0.1:3000/asignaturas`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(asignatura),
        method : "PUT" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        if(datos ===  -1){
            crearToast("Asignatura no modificada","Fallo","red");
        }else{
            crearToast("Asignatura modificada con exito","Modificado","green")
        }
        console.log(datos);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function eliminarAsignatura(){
    if(document.getElementById("indice").value != ""){
        let asignatura = {
            "id" : document.getElementById("indice").value
        }
        
        
        let url =`http://127.0.0.1:3000/asignaturas`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(asignatura),
            method : "DELETE" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos ===  -1){
                crearToast("Asignatura no eliminada","Fallo","red");
            }else{
                crearToast("Asignatura eliminada con exito","Modificado","green")
            }
            console.log(datos);
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{

    }
    
}


function datosAsignatura(){
    let element;
    if(document.getElementById("titulo").value != ""){
        let titulo =  document.getElementById("titulo").value;  
        return new  Asignatura(titulo);
    }else{
        element = document.getElementById("titulo");
        element.classList.toggle("errorCampo");
        return null;
    }
}


function cargarAsignatura(){
    let grupoSelect = document.getElementById("asignatura");
    let id =document.getElementById("indice").value;

    let url =`http://127.0.0.1:3000/asignaturas?student_id=${id}`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }

    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        let select=`<option value="null" selected="selected"></option>`;

        for(let i=0; i<datos.length;i++){
            select+= `<option value="${datos[i].id}">${datos[i].title}</option>`;
        }

        grupoSelect.innerHTML =select;
    })
    .catch((error)=>{
        console.log(error);
    })
}

function cargarAsignaturaAlumno(){
    let grupoSelect = document.getElementById("asignatura");

    let url =`http://127.0.0.1:3000/asignaturas`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }

    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        let select=`<option value="null" selected="selected"></option>`;

        for(let i=0; i<datos.length;i++){
            select+= `<option value="${datos[i].id}">${datos[i].title}</option>`;
        }

        grupoSelect.innerHTML =select;
    })
    .catch((error)=>{
        console.log(error);
    })
}