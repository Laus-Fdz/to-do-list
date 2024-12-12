//------------------------------------------------------
// 0. Comentarios y documentación
//------------------------------------------------------
// Vamos a realizar un ToDo List para prácticar el uso de objetos y arays.



//------------------------------------------------------
// 1. Constantes y variables
//------------------------------------------------------

const formu = document.getElementById("formTarea");
const txtTarea = document.getElementById("txtTarea");
const boxTareas = document.getElementById("listaTareas");

// const listaDeTareas = ["Ordenar el código JS", "Crear las funciones", "Probar el programa"];

let listaDeTareas = [
{id: 1, titulo: "Ordenar el código de JS", isCompletada: true},
{id: 2, titulo: "Crear las funciones", isCompletada: false},
{id: 3, titulo: "Probar el programa", isCompletada: false},
];


//------------------------------------------------------
// 2. Funciones reutilizables ( esto tambien se suele hacer en un archivo a parte, por ejemp: utils.js )
//------------------------------------------------------



//------------------------------------------------------
// 3. Funciones principales de nuestra web
//------------------------------------------------------
function mostrarTareas(){

    // borrar todo el contenido de la caja
    boxTareas.innerHTML = "";

    // cargar las nuevas tareas
    listaDeTareas.forEach((tarea)=> {
        const titulo = tarea.titulo;
        const id = tarea.id;

        const isChecked = tarea.isCompletada ? "checked" : "";

        boxTareas.innerHTML += `
        <li>
        <input type="checkbox" id="${id} name="checkbox" ${isChecked} />
        <label for="${id}">${titulo}</label> <br> <button class="ButtonLi" onclick="eliminarTarea(${id})">Eliminar</button> 
        <button class="ButtonLi" onclick="completarTarea(${id})">Completar</button>
        </li>`;
    });
}

function agregarTarea(){
    const nuevaTarea = txtTarea.value.trim(); // el texto del input
    console.log(nuevaTarea);

    if (nuevaTarea == "") {
        alert("Por favor, ingrese una nueva tarea válida");
        return;
    }

    // Agregar nueva tarea
    listaDeTareas.push({titulo: nuevaTarea , isCompletada:false});
    txtTarea.value = ""; //limpiar el campo de texto una vez enviado

    mostrarTareas();
}

function eliminarTarea(idTarea){
    // alert("Eliminar tarea: " + idTarea)

    // 1. método utilizando forEach y splice
    // listaDeTareas.forEach((tarea, index) => {
    //     if (tarea.id == idTarea){
    //         listaDeTareas.splice(index, 1);
    //     }
    // });

    // 2. método utilizando findindex
    // const index = listaDeTareas.findIndex((t) => t.id === idTarea);
    // listaDeTareas.splice(index, 1);

    // 3. método utilizando filter
    // para que este funcione, listaDeTareas tiene que estar definido con let
    listaDeTareas = listaDeTareas.filter((t) => t.id !== idTarea);

    mostrarTareas();
}

function completarTarea(idTarea){
    // alert("Completando tarea: "+ idTarea);

// 1. buscar el elemento con el id deseado
    const tarea = listaDeTareas.find( (t) => t.id == idTarea );

// 2. cambiar el valor de isCompletada
    // if(tarea.isCompletada == true) {
    //     tarea.isCompletada = false;
    // } else {
    //     tarea.isCompletada = true;
    // }

    tarea.isCompletada = !tarea.isCompletada;

    mostrarTareas();
}


//------------------------------------------------------
// 4. EvenListeners
//------------------------------------------------------
formu.addEventListener("submit", (event) => {
    
    //NO envíes el formulario
    event.preventDefault();

    agregarTarea();

});


//------------------------------------------------------
// 5. Inicializar nuestro programa
//------------------------------------------------------

mostrarTareas();


//------------------------------------------------------
// ACORDEON
//------------------------------------------------------

// 1. Declarar variables y constantes
const headers = document.querySelectorAll(".Acordeon-header");  
const items = document.querySelectorAll(".Acordeon-item");      


// 2. Crear funciones y listeners
headers.forEach( header => {
    header.addEventListener("click", () => {  
        const item = header.closest(".Acordeon-item");

        // quitar el active de todos los elementos
        items.forEach( elemento => {
            elemento.classList.remove("active");
        });

        // agregar el active al item actual
        item.classList.add("active");
    });
});

// 3. Ejecutar el programa (esto lo hace al inicio de la ejecución)
headers[0].click();


//------------------------------------------------------
// TABS
//------------------------------------------------------


// 1. Creamos variables y constantes
const listaBotones = document.querySelectorAll(".Tabs-buttons");
const listaPaginas = document.querySelectorAll(".Tabs-contenido");

// 2. Creamos funciones y eventListeners
listaBotones.forEach(boton => {
    boton.addEventListener("click", () => {

        // leer el dataset
        const targetId = boton.dataset.tab;
        const target = document.getElementById(targetId);

        // al target le agregue la clase u-visible
        target.classList.add("u-visible");


        // agregar la clase active al Tabs-button
        boton.classList.add("u-active");
    });
});

// funcion que quita clases a mis elementos activos
function quitarClases(){

    listaBotones.forEach( item => {
        item.classList.remove("u-active");
    });

    listaPaginas.entries.forEach( pagina => {
        pagina.classList.remove("u-visible");
    });

}

// 3. Iniciamos nuestro programa
listaBotones[0].click();


