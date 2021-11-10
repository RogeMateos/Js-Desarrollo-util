/*

*/

/*
    ||    console.log(``);    ` `    ||
*/

/*
------------------------------------------------------------
FOR, FOR IN , FOR OF
------------------------------------------------------------
*/

/*
------------------------------------------------------------
02
BUCLE FOR 
99 por ciento de los casos usamos esto en colecciones cuando queremos iterar sobre una coleccion


------------------------------------------------------------
*/

const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];

for (let i = 0; i < cursosJS.length; i++) {
  console.log(cursosJS[i]);
}

//Utilizando template string

const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];

for (let i = 0; i < cursosJS.length; i++) {
  console.log(` ${i}. ${cursosJS[i]}`);
}

//dandole la vuelta al bucle

const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];

for (let i = cursosJS.length - 1; i >= 0; i--) {
  console.log(` ${i}. ${cursosJS[i]}`);
}

/*
------------------------------------------------------------
03
BUCLE FOR OF

Es una mejora de el lenguaje de javascipt 

Este for tiene que hacerse Obligatoriamente sobre Objetos iterables
Objeto iterable es algo qeu se parece a un array 

------------------------------------------------------------
*/

const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];

/*
    for(let i= 0; i < cursosJS.length; i++){
      console.log(cursosJS[i]);
      }
    */

//con for conseguimos lo mismo

/*
La variable leccion es un const porque se crea 
*/
for (const leccion of cursosJS) {
  console.log(leccion);
}

//Esto es lo que esta haciendo el for of por nosotros

for (let i = 0; i < cursosJS.length; i++) {
  const leccion = cursosJS[i];
  console.log(leccion);
}

//Codigo Limpio FOR OF

const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];

for (const leccion of cursosJS) {
  console.log(leccion);
}

//Desventajas
//No tenemos acceso al indice, si necesitaas el indice no necesitas un for of
//

/*
------------------------------------------------------------
04
BUCLE FOR IN 
El bucle for in sirve para recorrer las claves de un objeto
Nunca debemos utilizarlo para array

La implementacion de for in en chrome y en firefox te devuelve 
los resultados en orden 
Pero en el standard de javascript dice que no tiene porque devolver los resultados
en orden


No es un bucle para arrays
Aparentemente nos saca el indice de el array
Array definicion
Es un objeto y se comporta como tal , un objeto es un conjunto de claves valor
key value
El bucle for in nos devuelve todas las claves 
Cuando vemos un array vemos las claves qeu coninciden con el indice d e un array
A un array se le pueden añadir propiedades porque un array no existe como tal
Es una forma que tenemos ne javascript de representar un objeto especial


------------------------------------------------------------
*/

const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];

for (const leccion in cursosJS) {
  console.log(leccion); //0,1,2,3 parecen indices pero son claves/keys
}

//Ver que es un array

const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];
console.log(cursosJS);

for (const leccion in cursosJS) {
  console.log(leccion);
}

//Problemas for in

//Todo parece ok pero..

const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];

for (const i in cursosJS) {
  console.log(` ${i}. ${cursosJS[i]}`);
}

//si pongo i +1
//01,11,21,31, no hace la suma porque el i es un string
const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];

for (const i in cursosJS) {
  console.log(typeof i); //String
  console.log(` ${i + 1}. ${cursosJS[i]}`); //01,11,21,31,
}

//Añadiendo Profesor

const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];
cursosJS.profesor = "Roge";

for (const i in cursosJS) {
  console.log(typeof i);
  console.log(` ${i + 1}. ${cursosJS[i]}`); //01,11,21,31,profesor1Roge
}



//Adding console.log
const cursosJS = [
  "intro a js",
  "variables y tipos",
  "Conversion de tipos",
  "Funciones",
];
cursosJS.profesor = "Roge";
console.log(cursosJS); // Todo el array mas profesor Roge
for (const i in cursosJS) {
  console.log(typeof i);
  console.log(` ${i + 1}. ${cursosJS[i]}`); //01,11,21,31,profesor1Roge
}





//Ejemplo For in practico


const cursosJS = {
    Title:"Curso js",
    profesor:"Roge",

};

for (const i in  cursosJS) {
  console.log(` ${i} -> ${cursosJS[i]}`);//Tittle -> cursoJs,Profesor->Pablo
}



/*
RESUMEN 
For es un bucl
Utilizar for in y for of para las cosas que fueron diseñados

FOR OF
Para iterar sobre una coleccion ordenada en la que no nos interesa el indice
Solo nos interesa iterar sobre todos los elementos de la coleccion


FOR IN 
Para cuando estmaaso buscando claves en un objeto
Esto se da sobre todo para temas de depuracion, sobre todo cuando queramos
pintar un objeto

*/
