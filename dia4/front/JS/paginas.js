let contenedor = document.getElementById("contenedor__principal");

function inicio(){
    contenedor.innerHTML=`<div class="container">
                            <div class="row">
                                <div class="col-xs-12 contenido__banner">
                                    <h3 class="contenido__banner__texto">
                                        En Codenotch te convertimos<br>
                                    en un profesional Tech.</h3>
                                    <h2 class="contenido__banner__titulo">
                                        MORE THAN LEARN.<br>BECOME
                                    </h2>
                                    <h4 class="contenido__banner__subtexto">
                                        Cursos intensivos de Programación Web y Data Science
                                    </h4>
                                </div>
                            
                                <div class="col-xs-12 contenido__comentario">
                                    <diV class="row">
                                        <div class="col-xs-12 col-md-6">
                                            <figure class="contenido__comentario__izquierda__imagen">
                                                <img class="contenido__comentario__izquierda__imagen__img img-fluid" src="./img/comentario.jpg" alt="BaFormación en Codenotch">
                                            </figure>
                                        </div>
                                        <div class="col-xs-12 col-md-6"> 
                                            <p class="contenido__comentario__derecha__texto">“La industria necesita iniciativas como la de Codenotch, que brinda una calidad 
                                                docente y prepara a profesionales para la actividad real de la empresa.”</p>
                                            <p class="contenido__comentario__derecha__subtexto">Rodrigo Aguirre de Cárcer | Ex-director General Ebay España</p>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="col-xs-12 contenido__formacion">
                                    <diV class="row">
                                        <div class="col-xs-12 col-md-8">
                                            <h2 class="contenido__formacion__izquierda__titulo">Formación tecnológica con un claro objetivo</h2>
                                            <p class="contenido__formacion__izquierda__texto">Convertir a nuestros estudiantes en auténticos profesionales de la programación impulsando su carrera en la industria digital.
                                                <br><br>
                                                Nuestra formación intensiva y práctica va dirigida a personas que desean formar parte del motor de cambio de la industria 
                                                tecnológica en la era de la revolución digital.
                                                <br><br>
                                                Los Bootcamps son programas educativos vivos, en constante actualización para contener la evolución del sector. 
                                                Son impartidos mediante una metodología personalizada, disruptiva y transformadora que cubre las necesidades de la realidad laboral.
                                            </p>
                                        </div>
                                        <div class="col-xs-12 col-md-4">
                                            <figure class="contenido__formacion__derecha__imagen">
                                                <img class="img-fluid" src="./img/formacion.png" alt="Formación en Codenotch">
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
}

function alumnos(){
    let capaAlumnos =`<div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-sm-6">
                            <h3 class="titulo_contenedor">ALUMNOS</h3>
                                <form>
                                    <div class="form-group">
                                    <label for="indice">Indice</label>
                                    <input type="number" class="form-control" id="indice" aria-describedby="emailHelp" placeholder="Índice">
                                    </div>
                                    <div class="form-group">
                                    <label for="nombre">Nombre</label>
                                    <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                                    </div>
                                    <div class="form-group">
                                        <label for="apellido">Apellido</label>
                                        <input type="text" class="form-control" id="apellido" placeholder="Apellido">
                                    </div>
                                    <div class="form-group">
                                        <label for="grupo">Grupo</label>
                                        <select class="form-control" id="grupo">
                                        
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="anioIngreso">Fecha de ingreso</label>
                                        <input type="date" class="form-control" id="anioIngreso" placeholder="Fecha de ingreso">
                                    </div>
                                    <div class="botonera">
                                    <button type="button" class="btn btn-primary" onclick="buscarAlumnos()">Buscar</button>
                                    <button type="button" class="btn btn-success" onclick="insertarAlumnos()">Añadir</button>.
                                    <button type="button" class="btn btn-warning" onclick="modificarAlumnos()">Modificar</button>
                                    <button type="button" class="btn btn-danger" onclick="eliminarAlumnos()">Eliminar</button>
                                    </div>
                                </form>
                            </div>
                            <div class="w-100"></div>

                            <div class="col-sm-6" id="alumnos_busqueda">
                        </div>
                        </div>
                    </div>`;
    contenedor.innerHTML=capaAlumnos;
    let grupoSelect = document.getElementById("grupo");
    cargarGrupo(grupoSelect);

}

function profesor(){
    let capaProfesor =`<div class="container">
                            <div class="row d-flex justify-content-center align-items-center">
                                <div class="col-sm-6">
                                <h3 class="titulo_contenedor">PROFESOR</h3>
                                    <form>
                                        <div class="form-group">
                                        <label for="indice">Indice</label>
                                        <input type="number" class="form-control" id="indice" aria-describedby="emailHelp" placeholder="Índice">
                                        </div>
                                        <div class="form-group">
                                        <label for="nombre">Nombre</label>
                                        <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                                        </div>
                                        <div class="form-group">
                                            <label for="apellido">Apellido</label>
                                            <input type="text" class="form-control" id="apellido" placeholder="Apellido">
                                        </div>
                                        <div class="botonera">
                                        <button type="button" class="btn btn-primary" onclick="buscarProfesor()">Buscar</button>
                                        <button type="button" class="btn btn-success" onclick="insertarProfesor()">Añadir</button>.
                                        <button type="button" class="btn btn-warning" onclick="modificarProfesor()">Modificar</button>
                                        <button type="button" class="btn btn-danger" onclick="eliminarProfesor()">Eliminar</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="w-100"></div>

                                <div class="col-sm-6" id="profesor_busqueda">
                            </div>
                            </div>
                        </div>`;

    contenedor.innerHTML=capaProfesor;
}

function grupo(){
    let capaGrupo =`<div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-sm-6">
                            <h3 class="titulo_contenedor">GRUPOS</h3>
                                <form>
                                    <div class="form-group">
                                    <label for="indice">Indice</label>
                                    <input type="number" class="form-control" id="indice" aria-describedby="emailHelp" placeholder="Índice">
                                    </div>
                                    <div class="form-group">
                                    <label for="nombre">Nombre</label>
                                    <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                                    </div>
                                    <div class="botonera">
                                    <button type="button" class="btn btn-primary" onclick="buscarGrupo()">Buscar</button>
                                    <button type="button" class="btn btn-success" onclick="insertarGrupo()">Añadir</button>.
                                    <button type="button" class="btn btn-warning" onclick="modificarGrupo()">Modificar</button>
                                    <button type="button" class="btn btn-danger" onclick="eliminarGrupo()">Eliminar</button>
                                    </div>
                                </form>
                            </div>
                            <div class="w-100"></div>

                            <div class="col-sm-6" id="grupo_busqueda">
                        </div>
                        </div>
                    </div>`;

contenedor.innerHTML=capaGrupo;
}

function notas(){
    let capaNotas =` <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-sm-6">
                            <h3 class="titulo_contenedor">NOTAS</h3>
                                <form>
                                    <div class="form-group">
                                        <label for="idNota">Indice</label>
                                        <input type="number" class="form-control" id="idnota" placeholder="Indice de la nota">
                                    </div>
                                    <div class="form-group">
                                        <label for="indice">Alumno</label>
                                        <select class="form-control" id="indice" onchange="cargarAsignatura()">
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="Asignatura">Asignatura</label>
                                        <select class="form-control" id="asignatura">
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="Nota">Nota</label>
                                        <input type="number" class="form-control" id="nota" placeholder="Nota">
                                    </div>
                                    <div class="form-group">
                                        <label for="fecha">Fecha</label>
                                        <input type="date" class="form-control" id="fecha" placeholder="Fecha">
                                    </div>
                                    <div class="botonera">
                                    <button type="button" class="btn btn-primary" onclick="buscarNota()">Buscar</button>
                                    <button type="button" class="btn btn-success" onclick="insertarNota()">Añadir</button>.
                                    <button type="button" class="btn btn-warning" onclick="modificarNota()">Modificar</button>
                                    <button type="button" class="btn btn-danger" onclick="eliminarNota()">Eliminar</button>
                                    </div>
                                </form>
                            </div>
                            <div class="w-100"></div>

                            <div class="col-sm-6" id="nota_busqueda">
                        </div>
                        </div>
                    </div>`;

    contenedor.innerHTML=capaNotas;
    let grupoSelect = document.getElementById("indice");
    cargarAlumnos(grupoSelect);

}

function asignatura(){
    let capaAsignatura =`<div class="container">
                            <div class="row d-flex justify-content-center align-items-center">
                                <div class="col-sm-6">
                                <h3 class="titulo_contenedor">ASIGNATURAS</h3>
                                    <form>
                                        <div class="form-group">
                                        <label for="indice">Indice</label>
                                        <input type="number" class="form-control" id="indice" aria-describedby="emailHelp" placeholder="Índice">
                                        </div>
                                        <div class="form-group">
                                        <label for="titulo">Titulo</label>
                                        <input type="text" class="form-control" id="titulo" placeholder="Título">
                                        </div>
                                        <div class="botonera">
                                        <button type="button" class="btn btn-primary" onclick="buscarAsignatura()">Buscar</button>
                                        <button type="button" class="btn btn-success" onclick="insertarAsignatura()">Añadir</button>.
                                        <button type="button" class="btn btn-warning" onclick="modificarAsignatura()">Modificar</button>
                                        <button type="button" class="btn btn-danger" onclick="eliminarAsignatura()">Eliminar</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="w-100"></div>

                                <div class="col-sm-6" id="asignatura_busqueda">
                            </div>
                            </div>
                        </div>`;
    contenedor.innerHTML=capaAsignatura;
}


function adicionales(){
    let capaGrupo =`<div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-sm-6">
                            <h3 class="titulo_contenedor">HERRAMIENTAS ADICIONALES</h3>
                                <form>
                                    <div class="form-group">
                                    <label for="indice">Indice</label>
                                    <input type="number" class="form-control" id="indice" aria-describedby="emailHelp" placeholder="Índice">
                                    </div>
                                    <div class="form-group">
                                        <label for="alumno">Alumno</label>
                                        <select class="form-control" id="alumno">
                                        </select>
                                        </div>
                                    <div class="row botonera">
                                        <div class="col-sm-2 boton_adicional">
                                            <button type="button" class="btn btn-primary" onclick="hacerMedia()">Media</button>
                                        </div>
                                        <div class="col-sm-10">
                                            <h4 class="textoDescriptivo">
                                                Selecciona un Alumno para hacer la media 
                                            </h4>
                                        </div>

                                        <div class="col-sm-2 boton_adicional" >
                                            <button type="button" class="btn btn-success" onclick="apuntados()">Buscar</button>
                                        </div>
                                        <div class="col-sm-10">
                                            <h4 class="textoDescriptivo">
                                                Indica la id del alumno para sacar sus asignaturas o déjalo en blanco para sacar una lista de todos
                                            </h4>
                                        </div>

                                        <div class="col-sm-2 boton_adicional">
                                            <button type="button" class="btn btn-warning" onclick="impartidas()">Buscar</button>
                                        </div>
                                        <div class="col-sm-10">
                                            <h4 class="textoDescriptivo">
                                                Indica la id del profesor para sacar sus asignaturas o déjalo en blanco para sacar una lista de todos
                                            </h4>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div class="w-100"></div>

                            <div class="col-sm-6" id="adicionales_busqueda">
                        </div>
                        </div>
                    </div>`;

contenedor.innerHTML=capaGrupo;
let grupoSelect = document.getElementById("alumno");
    cargarAlumnos(grupoSelect);
}

function crearToast(text,title,color){
    let texto = text;
    let titulo = title;
    let toast = document.getElementById("toast");
    //toast.innerHTML="";

    let alerta = `<div class="toast-header">
                <h4 class="mr-auto toast__titulo__rojo">
                <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                <rect width="100%" height="100%" fill="${color}"></rect></svg>
                ${titulo}</h4>
                </div>
                <div class="toast-body toast__texto">
                    ${texto}
                </div>`;
    toast.innerHTML = alerta;
    var toastOn = new bootstrap.Toast(toast);

    toastOn.show()
}