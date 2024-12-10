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

const listaDeTareas = ["Ordenar el código JS", "Crear las funciones", "Probar el programa"];





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
        boxTareas.innerHTML += `<li>${tarea}</li>`;
    });
}


//------------------------------------------------------
// 4. EvenListeners
//------------------------------------------------------
formu.addEventListener("submit", () => {
    
    //NO envíes el formulario
    event.preventDefault();

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

});


//------------------------------------------------------
// 5. Inicializar nuestro programa
//------------------------------------------------------

mostrarTareas();