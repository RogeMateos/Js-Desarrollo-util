
/*

*/

//console.log(``);


//TIPOS PRIMITIVOS
 String
 num
 Boolean
 null
 undefined

 //TIPOS OBJETOS
 Objetos,
 Funciones
 Array es un tipo de Objeto
/*


02 DECLARAR CONSTANTES
*/

const iva = 1.21;

let precio1 =25;

precio1 = precio * iva;

let precio2 =15;

precio2 = precio2 = iva;

let cantidad1 =2;

let cantidad2 =3;

let total = precio1 * cantidad1 * precio2 * cantidad2;

console.log(total);



/*
como Restriciones las constantes una vez declaradas su valor no peude variar

Utilizamos let cuando el valor vaya a ser modificado a posteriori const para todos los demas casos
*/



const iva = 1.21;
iva = 1.22;   //error



/*
03 BUENAS PRACTICAS CON VARIABLES
*/

//Utilizamos let cuando el valor vaya a ser modificado a posteriori const para todos los demas casos
//Siempre que se pueda utilizare constantes
//por defecto utilizar siemprepe const
//NO se pueden utilizar palabras reservadas para declarar variabels ejemplo let
//No pueden contener espacios o le ponemos una barra baja o camel case


//No lET dara error
const let = 1.21;

let precio_1 =25;

let precioUno =25;

//Nombres de variables
//Pueden contener numeros, letras mayusculas y minusculas guiones bajos barras bajas
//una variable no peude empezr por un numero


// Nombres de constantes para multiplicar para dividir, en ese caso pondremos constantes en mayuscula


const IVA = 1.21;

//En caso camel case utilizamos barras bajas para separar

const IVA_PRECIO = 1.21;


//No se pueden declarar variables no constantes con el mismo nombre dentro de el mismo ambito/Scope


let hola = "hola";
let hola = "hola2";//Dara un error

const hola = "hola";
const  hola = "hola2";//Dara un error


//COdigo limpio renovado con buenas practicas







const TASA_IVA = 1.21;

let precio1 =25;

precio1 = precio * TASA_IVA;

let precio2 =15;

precio2 = precio2 = TASA_IVA;

let cantidad1 =2;

let cantidad2 =3;

let total = precio1 * cantidad1 * precio2 * cantidad2;

console.log(total);





/*
04 TIPOS DE DATOS STRINGS
 
strings 
"hola";
'hola';
`hola`;

operadores de los strings solo el + para concatenar



*/


"hola";
'hola';
`hola`;
'mi nombre "Roge';

const edad =26;

console.log("Mi nombre es 'Roge' y tengo " + edad + " años" )

//Para evitar esto tenemos los TEMPLATE STRINGS

console.log(`Mi nomnbre es 'Roge' "Mateos" y tengo ${edad} años`);





/*
04 TIPOS DE DATOS NUMBER
Almacenamos numeros de cualquier tipo
no existen enteros o decimales son todos numbers, pero hay metodos para solucionar esto
*/

const numero1 = 1;
const numero2 = -1;
const numero3 = 1.12;
const numero4 = 1;
const numero5 = -1.21;
const numero1 = 1e25;
const numero1 = 1;

console.log(numero1 + numero5);

console.log(numero1 + numero5);
console.log(numero1 - numero3);
console.log(numero1 * numero5);
console.log(numero1 / numero5);
console.log(numero1 % numero5);


//Realizar el modulo //Reminder

const numero1 = 3;
const numero2 = 2;
const numero3 = 1.12;
const numero4 = 1;
const numero5 = -1.21;
const numero1 = 1e25;
const numero1 = 1;



console.log(numero1 / numero5); 1,5
console.log(numero1 % numero5); //Seria el resto o reminder 1

//Este modulo se utiliza para comprobar si un numero es par
//Por ejemplo divido cinso entre dos si el modulo da uno esque la division no es exacta asi que es impar
//Este modulo tiene utilidad imaginemos que pintmaso una table y queremos las impares vayan en rojo y las pares en azul
//La que den modulo cero seran pares modulo uno impares




//OPERADORES +

let numero =6;
numero = numero + 2;
console.log(numero);//8


numero + =  2;
console.log(numero);//8


numero - =  2;// lo mismo 


// ++ Sumar   -- Restar 


let numero =6;

numero ++;//7

numero --;//5






/*
04 BOOLEANO ,NULL, UNDEFINED
almacena condicion si es true o false
Esto nos sirve para las condiciones

null undefined
Son dos tipos especiales 

NULL
Una variable es nula cuando tiene valor pero su valor es nulo , explicitamente el valor que tiene
la variable es nulo 

UNDEFINED
Una variable no tiene Valor



En general suelen ser bastante equivalentes pero hay ciertos casos
dodne esta pequeña distincion es importante
*/

true;
false;
null;
undefined;



const nulo = null; 
const indefinido = undefined;

console.log(nulo,indefinido);//Null Undefined


 
let hola 
console.log(hola);// Undefined


//Aqui si tiene valor la variable
let hola = null;
console.log(hola);// null 






/*
05
TYPE OF
Comprobar cual es el tipo de dato de una variable 
 
*/


console.log(typeof "hola");

console.log(typeof "5");


console.log(typeof "undefined");//Undefined

console.log(typeof "null");//Object null es una palabra reservada que hace referencia a el objeto nulo  
//Null es un object especifico especial que es el valor nulo 



console.log(typeof function (){})//Function

console.log(typeof [])//Object


//OPERANDO ENTRE STRINGS Y NUMBERS


let resultado = "2" + 2; //22

//resultado = resultado *2;

resultado *= 2;//44



console.log(resultado);  //44 Esto es devido por la conversion de tipos implicita, es decir/cuando trabajamos
//con tipos de datos distintos lo que hace javascript es convertirlos a el mismo tipo de datos
