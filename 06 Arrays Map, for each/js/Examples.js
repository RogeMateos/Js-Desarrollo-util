/*

*/

/*
    ||    console.log(``);    ` `
*/

/*
------------------------------------------------------------
------------------------------------------------------------
*/

//ARRAYS

/*
------------------------------------------------------------
02
CREAR Y ACCEDER ARRAYS
Cuando introducimos un elemento en un Array, lo que hacemos es introducirlo en un indice
Accedemos al as posiciones de el Array
Accedemos mediante indice
Se recomienda que sean valores  el mismo tipo los que se almacenan, para poder realizar las mismas operaciones

------------------------------------------------------------
*/

const miArray = [
  "hola",
  5,
  true,
  null,
  undefined,
  { a: 2, b: 3 },
  () => "hola",
  [1, 2, 3],
];

console.log(miArray);
console.log(miArray[0]);

//Reasignando array

miArray[4] = "Pablo";

console.log(miArray);

/*
------------------------------------------------------------
------------------------------------------------------------
*/

/*
------------------------------------------------------------
03
PROPIEDAD LENGTH
Los arrays no dejan de ser Objetos
Al ser un objeto tienes sus propieas proiedades , atributos y metodos 
Y es lo que se utiliza para manipular un arrray
Propiedad length
------------------------------------------------------------
*/

const miArray = [
  "hola",
  5,
  true,
  null,
  undefined,
  { a: 2, b: 3 },
  () => "hola",
  [1, 2, 3],
];
console.log(typeof miArray);
console.log(miArray.length); //8 Devuelve numero elemetnos hemos introducido al array

/*
------------------------------------------------------------
------------------------------------------------------------
*/

/*
------------------------------------------------------------
04
METODOS
PUSH, POP ,SHIFT , UNSHIFTH
------------------------------------------------------------
*/

const miArray = [1, 2, 3, 4, 5, 6];

//PUSH Añade elelmento al final de el array 7

miArray.push(7);
console.log(miArray); //[1,2,3,4,5,6,7]

//UNSHIFT Añade elemento al principio de el array

const PrimerElemento = miArray.unshift(0);

console.log(PrimerElemento, miArray); // [0,1,2,3,4,5,6,7]

//POP extraer el Ultimo elemento y lo almacena
const ultimoElemento = miArray.pop();

console.log(ultimoElemento); //6

//SHIFT Extraer el primer elemento

const PrimerElemento = miArray.shift();

console.log(PrimerElemento, miArray); //1

/*
------------------------------------------------------------
------------------------------------------------------------
*/

/*
------------------------------------------------------------
05
METODO
SPLICE
Añadir en diferentes posiciones un elemento a mayores que no sean las anteriories, primcipio , final

Splice nos pedira tres argumentos
Start indice donde empezamos insercion
Delete count Cuantos lementos a partirde la posicion queremos eliminar
Array de los elementos que queramos insertar a continuacion
------------------------------------------------------------
*/
const miArray = [1, 2, 3, 4, 5, 6];

miArray.splice(3, 0, "hola"); //
console.log(miArray); //[1,2,3,'hola',4,5,6];

//Añadiendo varios
const miArray = [1, 2, 3, 4, 5, 6];

miArray.splice(3, 0, "hola", "Pablo", "Jose"); //
console.log(miArray); //[1,2,3,'hola','Pablo','Jose',4,5,6];

//Insertando array, pero el array va a ser un elemento
//Nos inserte el array com un unico elemento
const miArray = [1, 2, 3, 4, 5, 6];

miArray.splice(3, 0, ["hola", "Pablo", "Jose"]);
console.log(miArray); //[1,2,3,array(3),4,5,6];

/*
------------------------------------------------------------
------------------------------------------------------------
*/

/*
------------------------------------------------------------
06
FOR EACH 
Realizar una operacion sobre cada uo de los elementos de el Array
------------------------------------------------------------
*/

//Imprimir un consol.log por cada elemento de el Array ,forEach() aqui lo que recibiremos es una function
//que sera un callback , que tendra tres parametros
//

const miArray = ["1", "2", "3", "4", "5", "6"];

//const foreachFunction = (elemento,indice,array) =>{}

miArray.forEach((elem, index, array) => {
  console.log(elem, index);
});

//Imprimiendo con tres parametros
//El array como tercer parametro se utilizaria Si nosotros queremos crear un array nuevo que
//depende de los valores , ejemplo quiero sumar a cada elemento
//el del a izquierda , lo que hago es utilizar este array dentro de le for each para calcular
//el nuevo valor
const miArray = ["uno", "2", "3", "4"];

miArray.forEach((elem, index, array) => {
  console.log(elem, index, array);
});

//Ejemplo imprimiendo elmento mas dos

const miArray = ["uno", "2", "3", "4"];

/*
miArray.forEach((elem,index,array)=> {
 console.log(elem +2 ,index);
})
*/
miArray.forEach((elem, index, array) => {
  console.log(Number(elem) + 2, index);
});

//Ejemplo multiplicando elemento por index

const miArray = ["uno", "2", "3", "4"];

/*
miArray.forEach((elem,index,array)=> {
 console.log(elem +2 ,index);
})
*/

miArray.forEach((elem, index, array) => {
  console.log(elem * index);
});

/*
------------------------------------------------------------
------------------------------------------------------------
*/

/*
------------------------------------------------------------
07 
MAP
Mapea el array realiza una operacion sobre todos los elementos dun array y devolver un nuevo 
array que contenga el resultado
Map  recive un callback igual que el de foreach  elem,index,array

La diferencia clave entre map y foreach es uqe foreach realiza una accion pero no decuelve absolutamente nada
map nos realiza una transformacion para cada uno de los elementos de el array y nos devuelve el elemento modificado
dentro de un nuevo array 
El array en maps siempre va a tener el mismo numero de elementos que lo que tenia el array original

------------------------------------------------------------
*/

//Tenemos estos numeros y queremos sumarle tres a cada numero
// Las funciones flecha se crearon para evitar todo este codigo

/*
let miArray = [1,2,3,4,5];

  miArray = miArray.map(function (i) {return i+3})
   console.log(miArray)
*/

let miArray = [1, 2, 3, 4, 5];

miArray = miArray.map((i) => i + 3);

console.log(miArray);

/*
------------------------------------------------------------
------------------------------------------------------------
*/

/*
------------------------------------------------------------
08

Ejercicio con MAP,FOREACH REDUCE

------------------------------------------------------------
*/

//Calcular el precio con iva , devolver array para que incluya precio con iva para
//cada uno de los elementos

const facturas = [
  {
    precio: 23,
    cantidad: 1,
  },
  {
    precio: 19,
    cantidad: 2,
  },
  {
    precio: 14,
    cantidad: 4,
  },
  {
    precio: 22,
    cantidad: 1,
  },
];

const IVA = 1.21;
const totalFactura = facturas.map((i) => i.precio * i.cantidad * IVA);

console.log(totalFactura);

//Ahora utilizando foreach
const facturas = [
  {
    precio: 23,
    cantidad: 1,
  },
  {
    precio: 19,
    cantidad: 2,
  },
  {
    precio: 14,
    cantidad: 4,
  },
  {
    precio: 22,
    cantidad: 1,
  },
];

const IVA = 1.21;
const totalFactura = faturas.map((i) => i.precio * i.cantidad * IVA);

totalFactura.forEach((i, index) => console.log("Elemento", index, i));

//Sumando todo con
/*
  let  total = 0;
    totalFactura.forEach((i) => total += i) 
*/

const facturas = [
  {
    precio: 23,
    cantidad: 1,
  },
  {
    precio: 19,
    cantidad: 2,
  },
  {
    precio: 14,
    cantidad: 4,
  },
  {
    precio: 22,
    cantidad: 1,
  },
];

const IVA = 1.21;
const totalFactura = facturas.map((i) => i.precio * i.cantidad * IVA);

let total = 0;
totalFactura.forEach((i) => (total += i));

console.log(total);

/*
 METODO REDUCE
 Lo que hace es transformar todo un array siguiendo unas reglas sumarlos realizar distintas operaciones
 y transformarlo en un unico valor 

 En la primera iteracion pongo en la A el elemento 0 y en la B el elemento 1
 y Despues lo sumando ponemos dentro de la A y sumamos la B

 Basicamente es un acumulador un contador  que lo que hace es sumar cada unos de los elementos del array
 esto se suele utilizar pero normalmente con un map por el medio 

*/

// Lo que queremos es trasnformar todo este array total factura en un numero

const facturas = [
  {
    precio: 23,
    cantidad: 1, //A
  },
  {
    precio: 19, //B
    cantidad: 2,
  },
  {
    precio: 14,
    cantidad: 4,
  },
  {
    precio: 22,
    cantidad: 1,
  },
];

const IVA = 1.21;
const totalFactura = facturas.map((i) => i.precio * i.cantidad * IVA);

const total = totalFactura.reduce((a, b) => a + b);

console.log(total);

// Haciendo console.log de a y de b

const facturas = [
  {
    precio: 23,
    cantidad: 1, //A
  },
  {
    precio: 19, //B
    cantidad: 2,
  },
  {
    precio: 14,
    cantidad: 4,
  },
  {
    precio: 22,
    cantidad: 1,
  },
];

const IVA = 1.21;

const totalFactura = facturas.map((i) => i.precio * i.cantidad * IVA);

console.log(totalFactura);

const total = totalFactura.reduce((a, b) => {
  console.log(a, b);
  return a + b;
});

console.log(total);

// Minimizando el codigo del map

const facturas = [
  {
    precio: 23,
    cantidad: 1, //A
  },
  {
    precio: 19, //B
    cantidad: 2,
  },
  {
    precio: 14,
    cantidad: 4,
  },
  {
    precio: 22,
    cantidad: 1,
  },
];

//const IVA = 1.21;

//const totalFactura = facturas.map(i => i.precio *i.cantidad  * IVA)

//console.log(totalFactura)

const total = facturas
  .map((i) => i.precio * i.cantidad)
  .reduce((a, b) => {
    console.log(a, b);
    return a + b;
  });

console.log(total);

/*
------------------------------------------------------------
------------------------------------------------------------
*/

/*
------------------------------------------------------------
09

FILTER

 elemento,indice,array
 Cuando tenemos solo el elemento lo llamamos i 
------------------------------------------------------------
*/

// Cuyo valor sea mayor de 40

const facturas = [
  {
    precio: 23,
    cantidad: 1, //A
  },
  {
    precio: 19, //B
    cantidad: 2,
  },
  {
    precio: 14,
    cantidad: 4,
  },
  {
    precio: 22,
    cantidad: 1,
  },
];

const total = facturas.map((i) => i.precio * i.cantidad).filter((i) => i > 30);

console.log(total);
