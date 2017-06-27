var estudiantes = [];


function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre=prompt('Ingrese el nombre del Estudiante:');
    var tec= prompt('Porcentaje Técnico:');
    var hse= prompt('Porcentaje de Habilidad Socio-Emocional:');
    
    var newRegistro = {
        primeroNom: nombre,
        segundoTec: tec,
        tercerHse: hse,
    }
    estudiantes.push(newRegistro);
    return newRegistro; 
}



function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.primeroNom + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.segundoTec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.tercerHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var resulMostrar="";
    for(var i = 0; i< estudiantes.length; i++ ){
        resulMostrar += mostrar(estudiantes[i]);
    }
    return resulMostrar;
}


function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var solu="";
    for(var i=0; i< estudiantes.length; i++ ){
        if(nombre.toLowerCase()==estudiantes[i].primeroNom.toLowerCase()){
        solu = estudiantes[i];
        }
    }
    return solu;   
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    return estudiantes.sort(function(a,b){
        return (b.segundoTec - a.segundoTec)
    })
    
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort(function(a,b){
    return (b.tercerHse - a.tercerHse)
    })
}