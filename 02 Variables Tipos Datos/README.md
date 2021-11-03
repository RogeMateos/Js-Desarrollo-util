# Js-Desarrollo-util

Variables Tipos de datos

https://www.youtube.com/watch?v=XC-Mdb6KMBM&list=PL3aEngjGbYhnxiyLvZD3sy1sjdiNJETW8&inde

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


como Restriciones las constantes una vez declaradas su valor no peude variar

Utilizamos let cuando el valor vaya a ser modificado a posteriori const para todos los demas casos

Utilizamos let cuando el valor vaya a ser modificado a posteriori const para todos los demas casos
Siempre que se pueda utilizare constantes
por defecto utilizar siemprepe const
NO se pueden utilizar palabras reservadas para declarar variabels ejemplo let
No pueden contener espacios o le ponemos una barra baja o camel case

Nombres de variables
Pueden contener numeros, letras mayusculas y minusculas guiones bajos barras bajas
una variable no peude empezr por un numero

 Nombres de constantes para multiplicar para dividir, en ese caso pondremos constantes en mayuscula


En caso camel case utilizamos barras bajas para separar



No se pueden declarar variables no constantes con el mismo nombre dentro de el mismo ambito/Scope


04 TIPOS DE DATOS STRINGS
 
strings 
"hola";
'hola';
`hola`;

operadores de los strings solo el + para concatenar


04 TIPOS DE DATOS NUMBER
Almacenamos numeros de cualquier tipo
no existen enteros o decimales son todos numbers, pero hay metodos para solucionar esto


Este modulo se utiliza para comprobar si un numero es par
Por ejemplo divido cinso entre dos si el modulo da uno esque la division no es exacta asi que es impar
Este modulo tiene utilidad imaginemos que pintmaso una table y queremos las impares vayan en rojo y las pares en azul
La que den modulo cero seran pares modulo uno impares



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


true;
false;
null;
undefined;



05
TYPE OF
Comprobar cual es el tipo de dato de una variable 




console.log(typeof "null");//Object null es una palabra reservada que hace referencia a el objeto nulo  
Null es un object especifico especial que es el valor nulo 

 Esto es devido por la conversion de tipos implicita, es decir/cuando trabajamos
con tipos de datos distintos lo que hace javascript es convertirlos a el mismo tipo de datos
