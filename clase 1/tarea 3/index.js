// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let n = 1;

while(n <=10){
    console.log(n)
    n = n + 1
}
// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let inicio = 10;

while(inicio >=0){
    console.log(inicio)
    inicio = inicio - 1
}

// Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numero = prompt("ingrese un numero para la cuenta regresiva")

while(numero >=0){
    console.log(numero)
    numero = numero - 1
}

// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let num = prompt("ingrese un numero para la cuenta progresiva");
numero = parseInt(numero);

let cero = 0;
while (cero <= num) {
  console.log(cero);
  cero += 1;
}
