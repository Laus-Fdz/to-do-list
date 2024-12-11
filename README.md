# Métodos de Arrays

## Push()

Agregar un nuevo item

```js
// Push
const frutas = ["Manzanas","Naranjas","Platanos"];
let nuevaLongitud = frutas.push ("Peras","Bananas");
console.log(nuevaLongitud); // 5
console.log(frutas); // ["Manzanas","Naranjas","Platanos", "Peras","Bananas"]
```

# Pop()
Elimina el último elemento del arry

```js
// Push
const frutas = ["Manzanas","Naranjas","Platanos"];
let nuevaLongitud = frutas.push ("Peras","Bananas");
console.log(nuevaLongitud); // 5
console.log(frutas); // ["Manzanas","Naranjas","Platanos", "Peras","Bananas"]


// Pop
let elementoEliminado = furtas.pop();
console.log(elementoEliminado); //Bananas
console.log(frutas); // ["Manzanas","Naranjas","Platanos", "Peras"]
```

# Shift()
Elimina el `primer` elemento del array y lo devuelve

```js
// Push
const frutas = ["Manzanas","Naranjas","Platanos"];
let nuevaLongitud = frutas.push ("Peras","Bananas");
console.log(nuevaLongitud); // 5
console.log(frutas); // ["Manzanas","Naranjas","Platanos", "Peras","Bananas"]


// Pop
let elementoEliminado = furtas.pop();
console.log(elementoEliminado); //Bananas
console.log(frutas); // ["Manzanas","Naranjas","Platanos", "Peras"]

// Shift
let elementoQuitado = frutas.shift();
console.log(elementoQuitado); // Manzanas
console.log(frutas;) // ["Naranjas","Platanos", "Peras"]
```

# Unshift()
Es como el push, pero agrega al principio. Devuelve el largo del array

```js
// Push
const frutas = ["Manzanas","Naranjas","Platanos"];
let nuevaLongitud = frutas.push ("Peras","Bananas");
console.log(nuevaLongitud); // 5
console.log(frutas); // ["Manzanas","Naranjas","Platanos", "Peras","Bananas"]


// Pop
let elementoEliminado = furtas.pop();
console.log(elementoEliminado); //Bananas
console.log(frutas); // ["Manzanas","Naranjas","Platanos", "Peras"]

// Shift
let elementoQuitado = frutas.shift();
console.log(elementoQuitado); // Manzanas
console.log(frutas;) // ["Naranjas","Platanos", "Peras"]

// Unshift
nuevaLongitud = frutas.unshift("sandía", "melón");
console.log
```

# Splice()
Tiene 3 parámetros:
    1. El indice donde se va a posicionar
    2. La cantidad de elementos a eliminar
    3. Los elementos a agragar

    Y devuelve elementos eliminados


```js
// Push
const frutas = ["Manzanas","Naranjas","Platanos"];
let nuevaLongitud = frutas.push ("Peras","Bananas");
console.log(nuevaLongitud); // 5
console.log(frutas); // ["Manzanas","Naranjas","Platanos", "Peras","Bananas"]


// Pop
let elementoEliminado = furtas.pop();
console.log(elementoEliminado); //Bananas
console.log(frutas); // ["Manzanas","Naranjas","Platanos", "Peras"]

// Shift
let elementoQuitado = frutas.shift();
console.log(elementoQuitado); // Manzanas
console.log(frutas;) // ["Naranjas","Platanos", "Peras"]

// Unshift
nuevaLongitud = frutas.unshift("sandía", "melón");
console.log(nuevaLongitud);
console.log(frutas);

// Splice
const elementosQuitados = frutas.splice(2, 1, "Kiwi", "Uvas");
console.log(elemtosQuitados); // ["Naranjas"]
console.log(frutas); // ["sandía", "melon", "kiwi", "uvas", "platanos", "peras"]

```

## Recordamos el uso del ForEach y Map

- Importante: La diferencia entre uno y el otro es que el forEach no devuelve nada, mientras que el map devuelve un nuevo array con los resultados de la función que se le pasa.

```js
const numeros = [1,2,3,4,5]:
const cuadrados = []; 

// Ejemplo utilizando forEach
numeros.forEach((num)=>{
    console.log(num)
    cuadrados.push(num*num);
});
console.log(cuadrados); // [1,4,9,16,25]

// Ejemplo utiliando map
const cuadradoMap = numero.map( (num) => {
    return num*num;
}); 
console.log(cuadradoMap); // [1,4,9,16,25]

// Optimización del código
const cuadradoMap = numeros.map( num => num * num);
console.log(cuadradoMap);
```

## Métodos de búsqueda en arrays

Los métodos de búsqueda se porían considerar como un método map() modificado, que devuelve tanto elementos como booleanos.

```js

const listaCoches = ["Peugot","BMW","VW","Tesla","Ford","BYD"];

//Find : Devuelve el primer elemento que encuentre
const coche = listaCoches.find( (coche) => coche === "BMW" );
console.log(coche); // BMW


// Some : booleano, si hay alguno que cumple el requisito
const tieneTesla = listaCoches.some( (coche) => coche === "Tesla");
console.log(tieneTesla);

// Every : booleano, si todos cumplen el requisito
const todosEmpiezanConB = listaCoches.every ( (coche) => coche[0] === "B" );
console.log(todosEmpiezanConB); // false

// Filter : todos los elementos que cumplan el requisito
const cochesConB = listaCoches.filter ( (coches) => coches[0] === "B" );
console.log(cochesConB);

const cochesConT = listaCoches.filter ((coches) => coches.includes("T"));
console.log(cochesConT);
const cochesConTyt = listaCoches.filter ((coches) => coches.toLowerCase().includes("t"));
console.log(cochesConTyt);

const cochesDeTresLetras = listaCoches.filter( (coches) => coches.length === 3);
console.log(cochesDeTresLetras);

```