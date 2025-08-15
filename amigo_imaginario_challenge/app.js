// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

let textoMutable = (elemento, texto) => {
  document.querySelector(elemento).innerHTML = texto;
};
const ami = document.getElementById("amigo");

const agregarAmigo = () => {
  if (ami.value === "") {
    textoMutable("h2", "Por favor, ingresa un nombre de amigo");
    return;
  } else if (ami.value.length < 3 || ami.value.length > 20) {
    textoMutable(
      "h2",
      "El nombre del amigo debe tener entre 3 y 20 caracteres"
    );
    return;
  } else {
    textoMutable("h2", "Amigo agregado correctamente");
    let amigo = ami.value;
    amigos.push(amigo);
    ami.value = "";
    return amigos;
  }
};

const sortearAmigo = () => {
  let num = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[num];
  console.log(amigos.length);
  if (amigos.length == 0) {
    textoMutable("h2", "No hay amigos para sortear");
    return;
  }
  if (amigos.length === 1) {
    textoMutable("h2", "Solo hay un amigo, no se puede sortear");
    return;
  }

  textoMutable("h2", `El amigo sorteado es: ${amigoSorteado}`);
};
