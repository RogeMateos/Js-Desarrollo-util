/*

*/

/*
    ||    console.log(``);    ` `    ||
*/

/*
------------------------------------------------------------
------------------------------------------------------------
*/

//COMPARACIONES

//Loose ==       !=

//Strict ===     !==

/*
------------------------------------------------------------
02
IGUALDAD ABSTRACTA/ LOOSE

Comparar de valores a traves de un operador de comparacion y obtener un valor booleano como respuesta

Compara los valores pero si son de distinto tipo lo que hace es intentar pasarlos a el mismo tipo
------------------------------------------------------------
*/

const a = 1;
const b = 1;

console.log(a == b);//True



const a = 1;
const b = 2;

console.log(a == b);//False



const a = "1";
const b = 1;

console.log(a == b);//True




const a = "1";
const b = true;

console.log(a == b);//True

console.log[] == 0;//True un array vacio es igual a cero, porque se produce conversion

console.log [] != 0;//False distinto es negar lo que te de el ==




/*
------------------------------------------------------------
02
IGUALDAD  STRICT

 
------------------------------------------------------------
*/

const a = "1";
const b = true;

console.log(a === b);//False


/*
------------------------------------------------------------
03
MAYOR Y MENOR
------------------------------------------------------------
*/

const a = 1;
const b = 2;

 console.log( a < b);//True

 console.log( a >= b);//False



 const a = 1;
 const b = "12";

 console.log( a <= b);//True ha detectado numero en 12



 const a = "1;"
 const b = "12";

 console.log( a <= b);//False cuando comparamos strings lo que estamos es ordenandolos 
 //alfabeticamente



 //Esto seria lo mismo que arriba
 const a = "a;" // a es mas pequeña
 const b = "ab"; // que la b 

 console.log( a <= b);// False  

 //Si queremos que la comparacion se haga por orden alfabetico pasamos a string 
 //Por orden numerico pasamos a numero 




/*
------------------------------------------------------------
04
COMPARACIONES COMPUESTAS
------------------------------------------------------------
*/


const a = 1;
const b = 2;
const c = 3;

console.log(a < b);//True
console.log(b < c);//True


//Condicion conjunta

const a = 1;
const b = 2;
const c = 3;

console.log(a < b && b < c);//True

console.log(a < b || b < c);//True


const a = 2;
const b = 2;
const c = 2;

console.log(a < b);//False
console.log(!(a < b);//True a menor que b es false pero como lo hemos negado es true
