alert("¡Bienvenida y bienvenido a nuestro sitio web!");
let nombre = "Lua";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert("¡Error! Completa todos los campos");
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);
edad = prompt("ingrese su edad");

if (edad >= 18) {
    alert("¡Puedes tener licencia de conducir!");}
else{alert("regresa en " + (18 - edad) + " años para obtener tu licencia de conducir");
}   
