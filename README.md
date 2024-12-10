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