// Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

let elementos = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
let elementosAlReves = (array) => {
  for (let i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
};


// Crea una función que calcule el promedio de los elementos en una lista de números.

let promedio = (array) => {

    let numeroFinal = 0;

    for (let i = 0; i < array.length; i++) {

         numeroFinal += array[i];
        
        }
        console.log(numeroFinal/array.length)
}
promedio([1,2,3,4,5,6])
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// Crea una función que devuelva la suma de todos los elementos en una lista.

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
