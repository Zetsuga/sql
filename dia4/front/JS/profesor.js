class Profesor{

    constructor(first_name,last_name){
        this.firstName = first_name;
        this.lastName = last_name;
    }
}

function buscarProfesor(){
    let id = document.getElementById("indice").value;
    let contenedor = document.getElementById("profesor_busqueda");
    let url =""
    if(id===""){
        url =`http://127.0.0.1:3000/Profesores`;
    }else{
        url =`http://127.0.0.1:3000/Profesores?id=${id}`;
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
                    <td scope="col">Apellidos</td>
                </thead>
                <tbody>`;

        for(let i=0; i<datos.length;i++){
            tabla+= `<tr>
            <td class="texto_fila">${datos[i].id}</td>
            <td class="texto_fila">${datos[i].first_name}</td>
            <td class="texto_fila">${datos[i].last_name}</td>
            </tr>`;
        }

        tabla +=`</tbody>
        </table>`;

        contenedor.innerHTML =tabla;

        if(datos.length === 0 ){
            crearToast("Profesor no encontrado","Busqueda erronea","red");
        }else{
            crearToast("Profesor encontrado con exito","Busqueda satisfactoria","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function insertarProfesor(){
    let profesor = datosProfesor();
    if(profesor === null){
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }else{
        let url =`http://127.0.0.1:3000/profesores`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(profesor),
            method : "POST" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("profesor no guardado","Fallo","red");
            }else{
                crearToast("profesor guardado con exito","Guardado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

function modificarProfesor(){
   
    let profesor = {
        "id" : document.getElementById("indice").value,
        "firstName" :  document.getElementById("nombre").value,
        "lastName" :  document.getElementById("apellido").value
    }
    
    let url =`http://127.0.0.1:3000/profesores`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(profesor),
        method : "PUT" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        
        if(datos ===  -1){
            crearToast("Profesor no modificado","Fallo","red");
        }else{
            crearToast("Profesor modificado con exito","Modificado","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function eliminarProfesor(){
    if(document.getElementById("indice").value != ""){
        let profesor = {
            "id" : document.getElementById("indice").value
        }
        
        let url =`http://127.0.0.1:3000/profesores`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(profesor),
            method : "DELETE" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Profesor no borrado","Fallo","red");
            }else{
                crearToast("Profesor Borrado con exito","Borrado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }
    
}


function datosProfesor(){
    let element;
    let correcto = true;

    if(document.getElementById("nombre").value == ""){
        element = document.getElementById("nombre");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    if(document.getElementById("apellido").value == ""){
        element = document.getElementById("apellido");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    
    if(correcto){
        let nombre =  document.getElementById("nombre").value; 
        let apellido =  document.getElementById("apellido").value; 
        return new Profesor(nombre,apellido);
    }else{
        return null;
    } 
}
