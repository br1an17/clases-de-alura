// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

let indiceDeMasa = (peso, kilos) => {
  return (peso + kilos) / 2;
};

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.

let factorial = (n) => {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
};

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

let valor= parseInt(prompt("INGRESE EL VALOR EN DOLARES"))

function cambio (valor) {
  let cotizacion = 4.80;
  let resultado = valor * cotizacion;
  return resultado;
}
console.log("El valor en reales es: " + cambio(valor));

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function area () {
  let altura = parseInt(prompt("Ingrese la altura de la sala:"));
  let anchura = parseInt(prompt("Ingrese la anchura de la sala:"));

  let area = altura * anchura;
  let perimetro = 2 * (altura + anchura);

  console.log("El área de la sala es: " + area);
  console.log("El perímetro de la sala es: " + perimetro);

}

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaCircular() {
  let radio = parseInt(prompt("Ingrese la altura de la sala:"));
  let area = 3.14 * radio * radio;
  let perimetro = 2 * 3.14 * radio;

  console.log("El área del circulo es: " + area);
  console.log("El perímetro del  circulo es: " + perimetro);
}
// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

let tablaDeMultuplicar = (n) => {
  for (let i = 1; i < 10; i++) {
    console.log(n * i);
  }
};

