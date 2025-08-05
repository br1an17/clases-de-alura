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
    textoMutable("h1", "Felicidades, adivinaste el numero secreto");
    textoMutable("p", "El numero secreto era: " + numeroSecreto);
  } else if( numeroElegido > numeroSecreto) {
    textoMutable("h1", "Lo siento, no adivinaste el numero secreto");
    textoMutable("p", "El numero secreto es menor que " + numeroElegido);
    document.getElementById("numeroElegido").value = "";
  } else if( numeroElegido < numeroSecreto) {
    textoMutable("h1", "Lo siento, no adivinaste el numero secreto");
    textoMutable("p", "El numero secreto es mayor que " + numeroElegido);
    document.getElementById("numeroElegido").value = "";
  }
}

textoMutable("h1", "juego de adivinar el numero");
textoMutable("p", "Elije un numero entre 1 y 10");
