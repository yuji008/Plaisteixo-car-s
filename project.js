(function(DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e           ???????????
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
  function app(){
    var $empresa = DOM('[data-js="empresa"]');
    var $telefone = DOM('[data-js="telefone"]');
    
    var $table = DOM('[data-js="tableInfo"]');
    var $register = DOM('[data-js="register"]');
    var dadosEmpresa = new XMLHttpRequest();
    var fragmentHTML = document.createDocumentFragment();
    dadosEmpresa.open('GET','company.json');
    dadosEmpresa.send();

  
      dadosEmpresa.addEventListener('readystatechange', ajaxAPI, false);
      $register.on('click',activateButton);

    function ajaxAPI(){
      if( dadosEmpresa.readyState === 4 && dadosEmpresa.status === 200 ){
        var dados = JSON.parse(dadosEmpresa.responseText);
        $empresa.get().textContent = dados.name;
        $telefone.get().textContent = dados.phone;
      
      }
    }
    
    function activateButton(event) {
      event.preventDefault();
      var TRNode = document.createElement('TR');
      var image = document.createElement('IMG');
      var TDimageCar = document.createElement('TD');
      var TDMarca = document.createElement('TD')
      var TDAno = document.createElement('TD');
      var TDPlaca = document.createElement('TD');
      var TDCor = document.createElement('TD');
      
      var $imageCar = DOM('[data-js="image-car"]'); 
      var $marca = DOM('[data-js="marca"]');
      var $ano = DOM('[data-js="ano"]');
      var $placa = DOM('[data-js="placa"]'); 
      var $cor = DOM('[data-js="cor"]');

      image.setAttribute('src',$imageCar.get().value);
      TDimageCar.appendChild(image);
      TDMarca.textContent = $marca.get().value;
      TDAno.textContent = $ano.get().value;
      TDPlaca.textContent = $placa.get().value;
      TDCor.textContent = $cor.get().value;
      
      TRNode.appendChild(TDimageCar);
      TRNode.appendChild(TDMarca);
      TRNode.appendChild(TDAno);
      TRNode.appendChild(TDPlaca);
      TRNode.appendChild(TDCor);

      fragmentHTML.appendChild(TRNode);
      $table.get().appendChild(fragmentHTML);
    }
  }
  app();
})(window.DOM);
