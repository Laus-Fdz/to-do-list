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

const listaDeTareas = [
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
    listaDeTareas.push(nuevaTarea);
    txtTarea.value = ""; //limpiar el campo de texto una vez enviado

    mostrarTareas();
}

function eliminarTarea(idTarea){
    alert("Eliminar tarea: " + idTarea)
    // modificar la lista y eliminar idTarea
    mostrarTareas();
}

function completarTarea(idTarea){
    alert("Completando tarea: "+ idTarea);
    // modificar la lista
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