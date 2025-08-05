
let textoMutable = (elemento,texto) => {
document.querySelector(elemento).innerHTML = texto;    
}

let inicio = () => {
alert("El juego ha comenzado");
}

textoMutable("h1","juego de adivinar el numero"); 
textoMutable("p","Elije un numero entre 1 y 10"); 