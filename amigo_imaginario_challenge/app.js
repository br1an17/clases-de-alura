// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];



const agregarAmigo = () => {
  let amigo = document.getElementById("amigo").value
  amigos.push(amigo)
  document.getElementById("amigo").value = ""
  return amigos
};

const sortearAmigo = () => {
  console.log(amigos)
let num = Math.floor(Math.random()+(amigos.length -1)) 
console.log(Math.random()+(amigos.length -1))
console.log(num)

  alert("sortear");
};
