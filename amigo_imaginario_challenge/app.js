// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

let textoMutable = (elemento, texto) => {
  document.querySelector(elemento).innerHTML = texto;
};


const agregarAmigo = () => {
  let amigo = document.getElementById("amigo").value
  amigos.push(amigo)
  document.getElementById("amigo").value = ""
  return amigos
};

const sortearAmigo = () => {
let num = Math.floor(Math.random() * amigos.length)
  let amigoSorteado = amigos[num]
  console.log(amigos.length);
  if (amigos.length === 0) {
    textoMutable("h2", "No hay amigos para sortear");
    return;
  }
  
textoMutable("h2", `El amigo sorteado es: ${amigoSorteado}`);
};

