class Grupo {

    constructor(name){
        this.name = name;
    }

}

function cargarGrupo(grupoSelect){

    let url =`http://127.0.0.1:3000/grupos`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }

    
    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        
        let select="";

        for(let i=0; i<datos.length;i++){
            select+= `<option value="${datos[i].id}">${datos[i].name}</option>`;
        }

        grupoSelect.innerHTML =select;
    })
    .catch((error)=>{
        console.log(error);
    })


}

function buscarGrupo(){
    let id = document.getElementById("indice").value;
    let contenedor = document.getElementById("grupo_busqueda");
    console.log(contenedor);
    let url =""
    if(id===""){
        url =`http://127.0.0.1:3000/grupos`;
    }else{
        url =`http://127.0.0.1:3000/grupos?id=${id}`;
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
                </thead>
                <tbody>`;

        for(let i=0; i<datos.length;i++){
            tabla+= `<tr>
            <td class="texto_fila">${datos[i].id}</td>
            <td class="texto_fila">${datos[i].name}</td>
            </tr>`;
        }

        tabla +=`</tbody>
        </table>`;

        contenedor.innerHTML =tabla;

        if(datos.length === 0 ){
            console.log(datos.length);
            crearToast("Grupo no encontrado","Busqueda erronea","red");
        }else{
            crearToast("Grupo encontrado con exito","Busqueda satisfactoria","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function insertarGrupo(){
    let grupo = datosGrupo();
    if(grupo === null){
        crearToast("Faltan datos o estan erroneos","Insertar erroneo","red");
    }else{
        let url =`http://127.0.0.1:3000/grupos`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(grupo),
            method : "POST" 
        }

        fetch(url,param)
        .then((data)=>{
            return data.json();
        })
        .then((datos)=>{
            if(datos === -1 ){
                crearToast("Grupo no guardado","Fallo","red");
            }else{
                crearToast("Grupo guardado con exito","Guardado","green")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

function modificarGrupo(){
    
    let grupo = {
        "id" : document.getElementById("indice").value,
        "name" :  document.getElementById("nombre").value
    }
    
    let url =`http://127.0.0.1:3000/grupos`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(grupo),
        method : "PUT" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        
        if(datos ===  -1){
            crearToast("Grupo no modificado","Fallo","red");
        }else{
            crearToast("Grupo modificado con exito","Modificado","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function eliminarGrupo(){
    if(document.getElementById("indice").value != ""){
        let grupo = {
            "id" : document.getElementById("indice").value
        }
        
        let url =`http://127.0.0.1:3000/grupos`;
        let param ={
            headers : {"Content-type" : "application/json; charset = uTF-8"},
            body : JSON.stringify(grupo),
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


function datosGrupo(){
    let element;
    if(document.getElementById("nombre").value != ""){
        let nombre =  document.getElementById("nombre").value;  
        return new  Grupo(nombre);
    }else{
        element = document.getElementById("nombre");
        element.classList.toggle("errorCampo");
        return null;
    }
}
