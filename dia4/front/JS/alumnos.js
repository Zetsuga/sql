class Alumnos{

    constructor(first_name,last_name,group_id,anio_ingreso){
        this.firstName = first_name;
        this.lastName = last_name;
        this.groupId = group_id;
        this.anioIngreso = anio_ingreso;
    }
}

function buscarAlumnos(){
    let id = document.getElementById("indice").value;
    let contenedor = document.getElementById("alumnos_busqueda");
    let url =""
    if(id===""){
        url =`http://127.0.0.1:3000/alumnos`;
    }else{
        url =`http://127.0.0.1:3000/alumnos?id=${id}`;
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
                    <td scope="col">Grupo</td>
                    <td scope="col">Fecha ingreso</td>
                </thead>
                <tbody>`;

        for(let i=0; i<datos.length;i++){
            let date = new Date(datos[i].anio_ingreso);
            let fecha = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

            tabla+= `<tr>
            <td class="texto_fila">${datos[i].id}</td>
            <td class="texto_fila">${datos[i].first_name}</td>
            <td class="texto_fila">${datos[i].last_name}</td>
            <td class="texto_fila">${datos[i].name}</td>
            <td class="texto_fila">${fecha}</td>
            </tr>`;
        }

        tabla +=`</tbody>
        </table>`;

        contenedor.innerHTML =tabla;

        if(datos.length === 0 ){
            crearToast("Alumno no encontrado","Busqueda erronea","red");
        }else{
            crearToast("Alumno encontrado con exito","Busqueda satisfactoria","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function insertarAlumnos(){
    let alumnos = datosAlumnos();
    if(alumnos === null){
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }else{
        let url =`http://127.0.0.1:3000/alumnos`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(alumnos),
            method : "POST" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Alumno no guardado","Fallo","red");
            }else{
                crearToast("Alumno guardado con exito","Guardado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

function modificarAlumnos(){
    let fecha;
    if(document.getElementById("anioIngreso").value != ""){
        let date = new Date(document.getElementById("anioIngreso").value); 
        fecha = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }else{
        fecha =null;
    }
    
    let alumno = {
        "id" : document.getElementById("indice").value,
        "firstName" :  document.getElementById("nombre").value,
        "lastName" :  document.getElementById("apellido").value,
        "anioIngreso" :  fecha,
        "groupId" : document.getElementById("grupo").value 
    }
    
    let url =`http://127.0.0.1:3000/alumnos`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(alumno),
        method : "PUT" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        
        if(datos ===  -1){
            crearToast("Alumno no modificado","Fallo","red");
        }else{
            crearToast("Alumno modificado con exito","Modificado","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function eliminarAlumnos(){
    if(document.getElementById("indice").value != ""){
        let alumno = {
            "id" : document.getElementById("indice").value
        }
        
        let url =`http://127.0.0.1:3000/alumnos`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(alumno),
            method : "DELETE" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Alumno no borrado","Fallo","red");
            }else{
                crearToast("Alumno Borrado con exito","Borrado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }else{
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }
    
}


function datosAlumnos(){
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
    if(document.getElementById("anioIngreso").value == ""){
        element = document.getElementById("anioIngreso");
        element.classList.toggle("errorCampo");
        correcto = false;
    }
    
    let grupo =  document.getElementById("grupo").value; 
    
    if(correcto){
        let nombre =  document.getElementById("nombre").value; 
        let apellido =  document.getElementById("apellido").value; 
        let date =  new Date(document.getElementById("anioIngreso").value); 
        let fecha = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        let alumno = new Alumnos(nombre,apellido,grupo,fecha);
        console.log(alumno)
        return alumno;
    }else{
        return null;
    } 
}

function cargarAlumnos(grupoSelect){

    let url =`http://127.0.0.1:3000/alumnos`;
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
            select+= `<option value="${datos[i].id}">${datos[i].first_name} ${datos[i].last_name}</option>`;
        }

        grupoSelect.innerHTML =select;
    })
    .catch((error)=>{
        console.log(error);
    })
}
