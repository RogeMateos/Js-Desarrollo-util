
/*

*/


/*
    ||    console.log(``);    ` `
*/


/*
------------------------------------------------------------
------------------------------------------------------------
*/




//CONVERSION TIPOS

/*
01 
INTRODUCION
javascript es un lenguaje de tipado dinamico y el tipo de una variable se determina por el valor que nosotros le pasemos ,
en el momento de su asignacion y puede cambiar en cualquier momento si le asignamos otro tipo de dato
Es decir podemso crear un numero despeus asignarle un string 

Esto tiene implicaciones a la hora de realizar operaciones con variables 
En javascript y otros lenguajes de tipado Dinamico realizar operaciones entre distintos tipos es posible , javascript convierte los dos valores
a un tipo comun y va a intentar relaizar esa operacion y lo va a hacer de una forma Implicita y lo va a hacer segun a el le 
parezca mejor, basandose en unas reglas
*/


/*
------------------------------------------------------------
------------------------------------------------------------
*/

/*
02 
CONVERSION DE TIPOS IMPLICITA
*/

//STRINGS
//En todos los casos cuando nos hace la operacion de suma lo que nos hace en todos los casos es concatenarlo
//y nosl o convierte a string
const cadena = '5';
const numero = 5;
const condicion = true;
const nulo = null;
let indefinido;

console.log(cadena + numero);//55
console.log(cadena + condicion);//5true
console.log(cadena + nulo);//5null
console.log(cadena + indefinido);//5undefined

//NUMERO

const cadena = '5';
const numero = 5;
const condicion = true;
const nulo = null;
let indefinido;

console.log(numero + condicion);// 6 because true is 1 and false is 0
console.log(numero + nulo);// 5 El valos null siempre se convierte a 0
console.log(numero + indefinido);// NAN indefinido no es un numero , no podemos sumar algo que no existe


//Operacion resta entre un string y un numero

console.log(numero - cadena); //0 siempre para la operacion SUMA sera string para las demas sera un numero, javascript toma el
//resto de operaciones como numero


const cadena = 'hola';
console.log(numero - cadena); //NAN 

//las conversiones implicitas cuando son de distinto tipo solamente se peuden convertir a STRING o a NUMERO 
//si existe un STRING y es un + se intenta convertira string 
//si es cualquier otra operacion se intenta convertira un numero

/*
------------------------------------------------------------
------------------------------------------------------------
*/



/*
03 
CONVERSION EXPLICITA 

Conversiones previas
Parseos
Para ello utilizaremos objetos predefinidos o prototipados 
string
Number
Boolean
parseIn ()
parseFloat()

*/

string()
Number() 
Boolean()




//STRING
const cadena = '5';
const numero = 5;
const condicion = true;
const nulo = null;
let indefinido;


console.log(String(numero)); //5 numero en blanco en consola

console.log(String(condicion));// True en blanco 

console.log(String(nulo));// Nulo en blanco 

console.log(String(indefinido));// Indefinido en blanco 




//NUMBER
const cadena = '5';
const numero = 5;
const condicion = true;
const nulo = null;
let indefinido;


const cadena = 'hola';
const cadena = '5';
console.log(Number(cadena)); // NAN porque es hola, //5 si es 5 pero lo cmabiariaa morado como numero en consola

console.log(Number(condicion));//  1 para true// 0 Para false 

console.log(Number(nulo));// 0 siempre 

console.log(Number(indefinido));// NAN



//BOOLEAN
// Esto se utiliza mucho con if(variable), se necesita saber cuando los valores son false or true



const cadena = '5';
const numero = 5;
const condicion = true;
const nulo = null;
let indefinido;


console.log(Boolean("0")); //True
console.log(Boolean("true")); //True
console.log(Boolean("false")); //True
console.log(Boolean("")); //False
console.log(Boolean(cadena)); //True

console.log(Boolean(1));//True cualquier valor seria true
console.log(Boolean(0));//False solo con 0

if(numero || numero ===0)




console.log(Boolean(nulo));//False because null is 0

console.log(Boolean(indefinido));//False


/*
//Resumen con boolean
Si la cadena esta vacia false  si tiene algun valor da igual el que sea True
Si el numero es 0 false
Si tiene cualquier otro valor es true
Null undefined False
*/



/*
------------------------------------------------------------
------------------------------------------------------------
*/


/*
4
PARSEO DE INTS Y FLOATS
parseIn ()
parseFloat()
*/

const cadena = '5.5';
const numero = 5;
const condicion = true;
const nulo = null;
let indefinido;


console.log(Number(cadena)); //5.5 como numero en morado 

console.log(parseFloat(cadena)); // 5.5 pero en morado ya como numero

console.log(parseFloat(numero)); // 5 como es un numero no se inventa decimales

console.log(parseInt(cadena)); // 5 con morado aqui quita el .5


const numero = 5.25;
console.log(parseInt(numero)); // 5 con morado aqui quita el .25