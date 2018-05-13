(function(DOM) {
  'use strict';

 var app = (function appController(){
    return {
      init: function init(){
        var dadosEmpresa = new XMLHttpRequest();
        dadosEmpresa.open('GET','company.json');
        dadosEmpresa.send();
        dadosEmpresa.addEventListener('readystatechange', this.getInfoCompany, false);
        this.getEvents();
      },
      getInfoCompany: function getInfoCompany(){
        var $empresa = DOM('[data-js="empresa"]');
        var $telefone = DOM('[data-js="telefone"]');
        if( app.isReadyAJAX.call(this) ){
          var dados = JSON.parse(this.responseText);
          $empresa.get().textContent = dados.name;
          $telefone.get().textContent = dados.phone;
        }
      },
      isReadyAJAX: function isReadyAJAX(){
        return this.readyState === 4 && this.status === 200;
      }

      getEvents: function getEvents(){
        var $register = DOM('[data-js="register"]');
        $register.on('click',this.handleTableInfo);
      },
      
      handleTableInfo: function handleTableInfo(e){
        e.preventDefault();      
        var fragmentHTML = document.createDocumentFragment();
        var $table = DOM('[data-js="tableInfo"]');
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
        return $table.get().appendChild(fragmentHTML);
      }
    }
  })();
  
  app.init();
})(window.DOM);
