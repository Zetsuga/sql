function buscarAsignaturaAlumno(){
    let id = document.getElementById("indice").value;
    let contenedor = document.getElementById("alumnoAsignatura_busqueda");
    
    let url =""
    if(id===""){
        url =`http://127.0.0.1:3000/alumnoAsignatura`;
    }else{
        url =`http://127.0.0.1:3000/alumnoAsignatura?id=${id}`;
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
        
        console.log(datos)
        let tabla=`<table class="table tablaCodenotch table-striped table-hover">
                <thead>
                    <td scope="col">Índice</td>
                    <td scope="col">Asignatura</td>
                    <td scope="col">Alumno</td>
                    <td scope="col">Grupo</td>
                </thead>
                <tbody>`;

        for(let i=0; i<datos.length;i++){
            tabla+= `<tr>
            <td class="texto_fila">${datos[i].id_subject}</td>
            <td class="texto_fila">${datos[i].title}</td>
            <td class="texto_fila">${datos[i].first_name} ${datos[i].last_name}</td>
            <td class="texto_fila">${datos[i].name}</td>
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