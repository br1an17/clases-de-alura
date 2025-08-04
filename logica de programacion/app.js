//Variables
let facil = 1;
let medio = 2;
let dificil = 3;
let numeroSecreto = 0;
let numeroUsuario = 0;
let intentos = 1;
let numeroFinal = 0;
let maximosIntentos = 0;

let nivel = parseInt(
  prompt(
    "Selecciona el nivel de dificultad: \n1. Fácil (1-10)\n2. Medio (1-100)\n3. Difícil (1-1000)"
  )
);

if (nivel == facil) {
  //Fácil
  numeroSecreto = Math.floor(Math.random() * 10) + 1; //Genera un número entre 1 y 10
  maximosIntentos = 3;
  numeroFinal = 10; //Para el caso de fácil, el número final es 10
} else if (nivel == medio) {
  //Medio
  numeroSecreto = Math.floor(Math.random() * 100) + 1; //Genera un número entre 1 y 100
  maximosIntentos = 5;
  numeroFinal = 100; //Para el caso de medio, el número final es 100
} else if (nivel == dificil) {
  //Difícil
  numeroSecreto = Math.floor(Math.random() * 1000) + 1; //Genera un número entre 1 y 1000
  maximosIntentos = 10;
  numeroFinal = 1000; //Para el caso de difícil, el número final es 1000F
} else {
  alert("Nivel no válido. Por favor, recarga la página e intenta de nuevo.");
}

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(
    prompt(`Me indicas un número entre 1 y ${numeroFinal} por favor:`)
  );

  console.log(typeof numeroUsuario);
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(
      `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    intentos++;

    //palabraVeces = 'veces';
    if (intentos > maximosIntentos) {
      alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
      break;
    }
    //La condición no se cumplió
    //alert('Lo siento, no acertaste el número');
  }
}