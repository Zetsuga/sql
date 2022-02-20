function hacerMedia(){
    let contenedor = document.getElementById("adicionales_busqueda");
    let id = document.getElementById("alumno").value;
    let url =`http://127.0.0.1:3000/media?id=${id}`;
    
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{

        if(datos === -1 ){
            crearToast("Alumno no guardado","Fallo","red");
        }else{
            let texto = `<h3>La media de el Alumno es: ${datos[0].media}</h3>`;

            contenedor.innerHTML =texto;
            crearToast("Alumno encontrado con exito","Busqueda satisfactoria","green")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function apuntados(){
    let contenedor = document.getElementById("adicionales_busqueda");
    let id = document.getElementById("indice").value;
    let url =""
    if(id===""){
        url =`http://127.0.0.1:3000/apuntadas`;
    }else{
        url =`http://127.0.0.1:3000/apuntadas?id=${id}`;
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
                    <td scope="col">Nombre</td>
                    <td scope="col">Apellidos</td>
                    <td scope="col">Asignatura</td>
                </thead>
                <tbody>`;

        for(let i=0; i<datos.length;i++){

            tabla+= `<tr>
            <td class="texto_fila">${datos[i].id}</td>
            <td class="texto_fila">${datos[i].first_name}</td>
            <td class="texto_fila">${datos[i].last_name}</td>
            <td class="texto_fila">${datos[i].title}</td>
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

function impartidas(){
    let contenedor = document.getElementById("adicionales_busqueda");
    let id = document.getElementById("indice").value;
    let url =""
    if(id===""){
        url =`http://127.0.0.1:3000/impartidas`;
    }else{
        url =`http://127.0.0.1:3000/impartidas?id=${id}`;
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
                    <td scope="col">Nombre</td>
                    <td scope="col">Apellidos</td>
                    <td scope="col">Asignatura</td>
                </thead>
                <tbody>`;

        for(let i=0; i<datos.length;i++){

            tabla+= `<tr>
            <td class="texto_fila">${datos[i].id}</td>
            <td class="texto_fila">${datos[i].first_name}</td>
            <td class="texto_fila">${datos[i].last_name}</td>
            <td class="texto_fila">${datos[i].title}</td>
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