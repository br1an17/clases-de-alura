// Crear una función que muestre "¡Hola, mundo!" en la consola.

function hola() {
  console.log("¡Hola, mundo!");
}
// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function nombre(name) {
  console.log(`¡Hola ${name}!`);
}

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function doble(num) {
  return num * 2;
}

// Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    return (a + b + c) / 3;
  } else {
    alert("ingrese 3 numeros por favor");
  }
}

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function mayor(numA, numB) {
  if (numA > numB) {
    return numA;
  } else {
    return numB;
  }
}

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function elevacion(numero) {
    return numero * numero;
}