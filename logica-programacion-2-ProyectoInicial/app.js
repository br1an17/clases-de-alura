let numeroSecreto = generarNumeroSecreto();

let textoMutable = (elemento, texto) => {
  document.querySelector(elemento).innerHTML = texto;
};

function elegirNumero() {
  let numeroElegido = parseInt(document.getElementById("numeroElegido").value);
  return numeroElegido;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function adivinarNumero() {
  let numeroElegido = elegirNumero();
  if (numeroElegido === numeroSecreto) {
    alert("Felicidades, has adivinado el numero");
  } else {
    alert("Lo siento, intenta de nuevo");
    textoMutable("p", "Elije otro numero entre 1 y 10");
    document.getElementById("numeroElegido").value = "";
  }
}

textoMutable("h1", "juego de adivinar el numero");
textoMutable("p", "Elije un numero entre 1 y 10");
