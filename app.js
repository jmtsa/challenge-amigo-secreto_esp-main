// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array de amigos
let amigos = [];
//Captura lo que hay en el cuadro de texto
let amigo = document.getElementById('amigo');
//Prepara la lista a mostrar en pantalla
let listaAmigos = document.getElementById('listaAmigos');

//Agrega el amigo a la pantalla y al array amigos;
function agregarAmigo() {
  let amigoTexto = amigo.value.trim();

  if (amigoTexto !== '') {
    let li = document.createElement('li');

    limpiaMensajeSinAmigosAun();

    amigos.push(amigoTexto);

    li.textContent = amigoTexto;
    listaAmigos.appendChild(li);
  }
  //Llama función para limpiar campo de entrada
  limpiarCampoDeEntrada();
}

function limpiarCampoDeEntrada() {
  amigo.value = '';
}

function limpiaMensajeSinAmigosAun() {
  if (listaAmigos.textContent == 'No hay lista de amigos') {
    listaAmigos.innerHTML = '';
  }
}

function sortearAmigo() {
  let mejorAmigo = amigoAleatorio(amigos);

  return (listaAmigos.innerHTML = `El mejor amigo secreto sorteado es: ${mejorAmigo}`);
}

//Genera el amigo secreto
function amigoAleatorio(lista) {
  if (amigos.length) {
    let item = Math.floor(Math.random() * lista.length);
    return lista[item];
  } else {
    return 'No hay lista de amigos';
  }
}
