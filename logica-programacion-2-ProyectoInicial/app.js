let intentos = 1;
let input = document.getElementById("numeroElegido");
let reinicio = document.getElementById("reiniciar");
let numeroSecreto = generarNumeroSecreto();

let textoMutable = (elemento, texto) => {
  document.querySelector(elemento).innerHTML = texto;
};

function elegirNumero() {
  let numeroElegido = parseInt(input.value);
  return numeroElegido;
}

function generarNumeroSecreto() {
  reinicio.disabled = true;
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
    input.disabled = true;
    reinicio.disabled = false;
  } else {
    intentos++;
    textoMutable("h1", "Lo siento, no adivinaste el numero secreto");
    input.value = "";
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
  textoMutable("h1", "Juego de adivinar el número");
  textoMutable("p", "Elige un número entre 1 y 10");
  input.disabled = false;
  input.value = "";
}

textoMutable("h1", "Juego de adivinar el número");
textoMutable("p", "Elige un número entre 1 y 10");
