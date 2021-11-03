
/*

*/

//console.log(``);


//CONVERSION TIPOS

/*
01 INTRODUCION
javascript es un lenguaje de tipado dinamico y el tipo de una variable se determina por el valor que nosotros le pasemos ,
en el momento de su asignacion y puede cambiar en cualquier momento si le asignamos otro tipo de dato
Es decir podemso crear un numero despeus asignarle un string 

Esto tiene implicaciones a la hora de realizar operaciones con variables 
En javascript y otros lenguajes de tipado Dinamico realizar operaciones entre distintos tipos es posible , javascript convierte los dos valores
a un tipo comun y va a intentar relaizar esa operacion y lo va a hacer de una forma Implicita y lo va a hacer segun a el le 
parezca mejor, basandose en unas reglas
*/




/*
02 CONVERSION DE TIPOS IMPLICITA
*/


//Strings

const cadena = '5';
const numero = 5;
const condicion = true;
const nulo = null;
let indefinido;

console.log(cadena + numero);
console.log(cadena + condicion);
console.log(cadena + nulo);
console.log(cadena + indefinido);


