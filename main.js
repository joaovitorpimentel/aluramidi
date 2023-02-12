function tocaSom (selectorAudio) {
  const element = document.querySelector(selectorAudio);

  if (element != null && element.localName === 'audio') {
    element.play();
  }
  else {
    //Alerta("Este elemento selecionado não existe ou seletor invalido").
    alert('This element select dont exists or invalid selector');
  }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//PARA CONTADOR FOR MENOR QUE O TAMANHO DA LISTADETECLAS, ADICIONAR +1.
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
      tocaSom(idAudio);
  }

  tecla.onkeydown = function (event) {
    if(event.code === "Enter" || event.code === "Space") {
      tecla.classList.add('ativa');
    }   

  }

  tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
  }

} 













