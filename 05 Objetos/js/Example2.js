
/*

*/


/*
    ||    console.log(``);    ` `
*/


/*
------------------------------------------------------------
------------------------------------------------------------
*/


//OBJETOS 2

/*
------------------------------------------------------------
05
PROBLEMA REFERENCIAS
------------------------------------------------------------
*/



const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

const item1 = {
    precio:15,
    cantidad:2,
    impuestos:IVA_GENERAL,

    
    calcularTotal: function  () {
       return this.precio * this.cantidad * this.impuestos
  }
}
const item2 = {
    precio:25,
    cantidad:3,
    impuestos:IVA_REDUCIDO,
    calcularTotal: function  () {
      return this.precio * this.cantidad * this.impuestos
 }
}

const item3 = item2;
item3.precio = 23;

console.log(item3);//tendra precio 23


//Haciendo comprobaciones de item2


const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

const item1 = {
    precio:15,
    cantidad:2,
    impuestos:IVA_GENERAL,

    
    calcularTotal: function  () {
       return this.precio * this.cantidad * this.impuestos
  }
}
const item2 = {
    precio:25,
    cantidad:3,
    impuestos:IVA_REDUCIDO,
    calcularTotal: function  () {
      return this.precio * this.cantidad * this.impuestos
 }
}

const item3 = item2;
item3.precio = 23;

console.log(item3);// precio 23 es correcto

console.log(item2);// 23 , deberia de ser 25 


/*
Esto esta pasando poque item2 e item3 son exactamente el mismo Objeto 
Primitivos se llaman por como se almacenan , almacenan su valor directamente
En un objeto no almacenamos el valor directo lo que almacenaremos es una referencia un puntero 
que hara referencia a donde ira esta localizado ese objeto en memoria
ciando copianos este objeto con igual  const item3 = item2; lo que estamos copiando es la referencia ,
tenemos una referencia aqui, otra aqui  y las dos apuntan al mismo Objeto

*/


/*
------------------------------------------------------------
------------------------------------------------------------
*/



/*
06 
OBJETO WINDOW

Accede Metodo log y pasa parametros hola console.log('Hola');
Porque existe un Objeto console?
El objeto padre es window , ese objeto lo crea el navegador directamente 
si tecleamos en console windown vemos que tiene un montonazo de metodos 

Cuando accedemos a console realmente lo que estamos haciendo es window.console.log(1)
*/

console.log('Hola'); //Accede Metodo log y pasa parametros hola
Window
window.console.log("1");
