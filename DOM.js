(function( win, doc ){
    'use strict';

    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.

    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elemento do DOM, podem
    ser métodos estáticos.

    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false

    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */

    function DOM(elements){
         if ( !(this instanceof DOM) )
            return new DOM(elements);
        this.elements = doc.querySelectorAll(elements)
    }
    DOM.prototype.on = function on( eventType, callback ){
        Array.prototype.forEach.call(this.elements, function(elementItem){
            elementItem.addEventListener( eventType, callback, false );
        })
    }

    DOM.prototype.off = function off( eventType, callback ){
        Array.prototype.forEach.call(this.elements, function(elementItem){
            elementItem.removeEventListener( eventType, callback, false );
        })
    }
    DOM.prototype.get = function get(index){
        if (!index)
            return this.elements[0];
        return this.elements[index];
    }

    DOM.prototype.forElementsEach = function forElementsEach(){
        return Array.prototype.forEach.apply(this.elements, arguments );
    }
    
    DOM.prototype.mapElements = function mapElements(){
        return Array.prototype.map.apply(this.elements, arguments );
    }

    DOM.prototype.filterElements = function filterElements(filterString){
        return Array.prototype.filter.apply(this.elements, arguments );
    }  

    DOM.prototype.reduceElements = function(){
        return Array.prototype.reduce.apply(this.elements, arguments);
    }
    
    DOM.prototype.reduceRightElements = function(){
        return Array.prototype.reduceRight.apply(this.elements, arguments);
    }

    DOM.prototype.everyElements = function(){
        return Array.prototype.every.apply(this.elements, arguments );
    }

    DOM.prototype.someElements = function(){
        return Array.prototype.some.apply(this.elements, arguments );
    }

    
    DOM.prototype.isWhat = function(obj){
        return Object.prototype.toString.call(obj);
    }
    
    DOM.prototype.isArray = function(isArray){
         return DOM.prototype.isWhat(isArray) === '[object Array]'; 
    }

    DOM.prototype.isFunction = function (isFunc) {
        return DOM.prototype.isWhat(isFunc) === '[object Function]';
    }

    DOM.prototype.isNumber = function (isNumb) {
        return DOM.prototype.isWhat(isNumb) === '[object Number]';
    }

    DOM.prototype.isString = function (isString) {
        return DOM.prototype.isWhat(isString) === '[object String]';
    }

    DOM.prototype.isBoolean = function (isBoo) {
        return DOM.prototype.isWhat(isBoo) === '[object Boolean]';
    }

    DOM.prototype.isNull = function (isNull) {
        return (DOM.prototype.isWhat(isNull) === '[object Null]') || (DOM.prototype.isWhat(isNull) === '[object Undefined]' );
    }
    
    win.DOM = DOM; 
    
})(window, document)