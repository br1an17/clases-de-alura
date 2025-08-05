let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

let textoMutable = (elemento, texto) => {
  document.querySelector(elemento).innerHTML = texto;
};

function elegirNumero() {
  let numeroElegido = parseInt(document.getElementById("numeroElegido").value);
  return numeroElegido;
}

function generarNumeroSecreto() {
  document.getElementById("reiniciar").disabled = true;
  return Math.floor(Math.random() * 10) + 1;
}

function adivinarNumero() {
  let numeroElegido = elegirNumero();
  if (numeroElegido === numeroSecreto) {
    textoMutable(
      "h1",
      `Felicidades, adivinaste el numero secreto en ${intentos} ${
        intentos > 1 ? "intentos" : "intento"
      }`
    );
    textoMutable("p", "El numero secreto era: " + numeroSecreto);
    document.getElementById("numeroElegido").disabled = true;
    document.getElementById("reiniciar").disabled = false;
  } else {
    intentos++;
    textoMutable("h1", "Lo siento, no adivinaste el numero secreto");
    document.getElementById("numeroElegido").value = "";
    if (numeroElegido > numeroSecreto) {
      textoMutable("p", "El numero secreto es menor que " + numeroElegido);
    } else {
      textoMutable("p", "El numero secreto es mayor que " + numeroElegido);
    }
  }
}
function reiniciar() {
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  textoMutable("h1", "juego de adivinar el numero");
  textoMutable("p", "Elije un numero entre 1 y 10");
  document.getElementById("numeroElegido").disabled = false;
  document.getElementById("numeroElegido").value = "";
}

textoMutable("h1", "juego de adivinar el numero");
textoMutable("p", "Elije un numero entre 1 y 10");
