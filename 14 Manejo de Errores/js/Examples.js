
/*

*/

console.log(``);


/*
2
LANZAR EXCEPCIONES THROW
Utilizamos palabra clave Throw
podemos lanzar todo tipo de errores
*/


throw "error";
throw 5;
throw function () {};

//Cuanzo lanzamos este Error estamos rompiendo la ejecucion normal de nuestro codigo lo que hemos denominado
//como flujo principal

throw "error";

//En el momento que lanzamos error rompemos el flujo, ya no vemos console log despues

console.log("Antes");

throw "error";

console.log("Despues");

//EJEMPLO  //Lanzar excepciones trow

//Math ramdom es un metodo que devuelve un numero entre cero y uno aleatorio 0.27 , 0.42

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

/*
pasos para reducir la funcion
const comprobarSiEsdefectuosa = () =>{
  if (Math.ramdom() < PROB_ERROR ) return true;
  else return false
}

const comprobarSiEsdefectuosa = () => {
  return  Math.ramdom() < PROB_ERROR ;
}

*/

//Esto devolvera si Math ramdon es menor que PROB_ERROR si es menor que 0.25 tendremos un error
const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

/*
Ejemplo if else
for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsDefectuosa();

  if (esDefectuosa) {
    throw `pieza de ${i} defectuosa`;
  } else {
    console.log(`pieza ${i} fabricada`);
  }
}

*/
for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();

  if (esDefectuosa) throw `pieza de ${i} defectuosa`; //Cuando lanzamos el throw se para lo siguiente, es como hacer uns especia de return

  console.log(`pieza ${i} fabricada`);
}




//EJEMPLO  //Lanzar excepciones trow no comments

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();

  if (esDefectuosa) throw `pieza de ${i} defectuosa`;

  console.log(`pieza ${i} fabricada`);
}

//03
//TRY CATCH
//Hacemos try catch para controlar la excepcion obsea el throw
// Con este codigo provocamos un Falso resultado, se repite la pieza defectuosa y la fabricada
// See ejemplo y veras  , lanza la pieza defectuosa y la pieza fabricada
//Esto ha pasado porque no encerramos dentro de el try  todo lo que tenemos que encerrar en condiciones

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw ` -> pieza de ${i} defectuosa`;
  } catch (ex) {              //Se le puede llamar error ex como se quiera
    console.log("Console ex", ex);
  }

  console.log(`pieza ${i} fabricada`);
}

//Console log debe de ir dentro de el try
//Encerrar dentro de el try todo lo que venga acontinuacion   console.log(`pieza ${i} fabricada`);
//Si es defectuosa lanzo un error , sino imprimo el   console.log(`pieza ${i} fabricada`);

//Sabiendo lo que tenemos que encerrar
//Un bloque try catch (controlar una excepcion )no implica que podamos seguir reanudando nuestro codigo
//una vez qeu se rompe el try todo lo que hay en el catch ya es lo que se va a ejecutar

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw ` -> pieza de ${i} defectuosa`;  //Si es defectuosa lanzo un error

    console.log(`pieza ${i} fabricada`); //Sino imprimo este console.log
  } catch (ex) {
    console.log("Console ex", ex); //es ex es todo esto  if (esDefectuosa) throw ` -> pieza de ${i} defectuosa`; 
  }
}

//Numero de errores, numero de aciertos
//Entonces en una cadena me interesa saber el nuemro de errores que tenemos y el numero de aciertos

//en este caso en lugar de hacer un throw y decir pieza y defectuosa que es lo que recibi y capturar esta excepcion
//y simplimente imprimirlo por consola  lo que hago es

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;
const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw ` -> pieza de ${i} defectuosa`;

    //console.log(`pieza ${i} fabricada`);
    correctas++;
  } catch (ex) {
    defectuosas++;
    //console.log(ex);
  }
}

console.log(`Fabricacas: ${NUM_PIEZAS}`);
console.log(`-> Correctas ${correctas}`);
console.log(`Defectuosas: ${defectuosas}`);

//4
//SENTENCIA FINALLY

//aL FINAL LO QUE PASA DENTRO DE UN BLOQUE

/*
SENTENCIA FINALLY

Al final lo que pasa dentro de un Bloque try una vez que salta el catch ya deja de ejecutarse
A veces nos interesa hacer una accion que es independiente  hay try o catch , quiero hacerla en todos los casos
Para eso tenemos un bloque extra que es el bloque Finally



Si vemos el Flujo , llegamos al try vemos que ha habido alguna defectuosa no sabemos cual ha sido 
, renemos que ir fabricando piezas 1 2 3 4 5 6 y supongamos ue la 7 da error , pues en las primeras 
ha ejecuado todo el bloque try  como no ha dado error simplemente ha ejecutado el finally 
cuando ha llegado al a que is ha dado error  nos hemos encontrado con este error  if (esDefectuosa) throw ` -> pieza de ${i} defectuosa`;
entonces ha ejecutado el catch  defectuosas++ pero luego ha ejecutado el finally igualmente


El finally suele ser para cosas hago una llamada a base de datos funciona bien
no funciona no pasanada 
Pero en cualquiera de los dos casos quiero cerrar conexion a base de datos, porque sino se queda abierta

*/

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;
const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw ` -> pieza de ${i} defectuosa`;

    correctas++;
  } catch (ex) {
    defectuosas++;
  } finally {
    console.log(`Fabricando pieza: ${i}: ...`);
  }
}

console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);

/*
5
LA CLASE ERROR

El throw que estamos lanzando es un string
Y es lo que recivimos en el catch ex
Es un string, lo mismo que lanzamos es lo que recibimos
Y esto es lo correcto? Debemos lanzar un string o numero, por supuesto que no

Javascript tiene una clase especifica para lanzar errores  error

*/

const NUM_PIEZAS = 5;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;
const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw ` -> pieza de ${i} defectuosa`;

    correctas++;
  } catch (ex) {
    console.log("console the ex", ex);    //pieza 2 es defectuosa` recibimos este string
    console.log(typeof ex); //String, esto no seria lo correcto lanzar un string
    defectuosas++;
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);




//Throwing  error
//Javascript tiene una clase especifica para lanzar errores ERROR
//Nos indica que en linea tenemos el error, para eso miramos en la consola de el browser

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw new Error("Pieza defectuosa");//Lanzamos Error con ERROR

    correctas++;
  } catch (ex) {
    console.log("console the ex", ex); //Error pieza defectuosa
    console.log(ex);
    //console.log(ex.message) //Nos indica el mensaje, pieza defectuosa
    //console.log(ex.name) //Nos indica el nombre de la clase que hemos lanzado ,Error
    //console.log(ex.stack) // Indica donde te ha dato esa excepcion
    console.log(typeof ex); //Error:Pieza defectuosa
    defectuosas++;
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);




//Example con function lanzar error

//nos va indicando que el error nos ha dado en lanzarlo de verdad , que ha sido llamado por lanzar este error
//que ha sido llamado por el index js

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

function lanzarloDeverdad() {
  throw new Error("Pieza defectuosa");
}

function lanzarError() {
  lanzarloDeverdad();  
}

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();// Lanzar error que se ha dado en lanzarlo de verdad que 
  //ha sido llamado por lanzar ese error, que ha sido llamado por el index
  try {
    if (esDefectuosa) lanzarError();

    correctas++;
  } catch (ex) {
    console.log("console the ex", ex);
    console.log(typeof ex);
    defectuosas++;
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);





/*
5
EXCEPCIONES CUSTOM
Hasta aqui hemos hablado solo cuando tenemos la pieza defectuosa pero que pasa si tenemos mas de una excepcion
dentro de nuestro codigo.

Que pasa si tenemos mas de una excepcion dentro den nuestro codigo mas de una posibildiad de fallo
Pieza defectuosa o bien maquina se puede parar
En este caso tenemos que distinguir una expcepcion de otra 

En estos casos se crea errores custom, errores propios, lo haremos extendiendo la clase error

Con esto ya tengo un error personalizado  class ErrorPiezaDefectuosa extends Error {}

Aqui no hemos cambiado nada el funcionamiento seria practicamente igual no hemos reescrito el constructor 

Podriamos reescribir lo que quisieramos

*/

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

class ErrorPiezaDefectuosa extends Error {} //Con esto ya tengo un error personalizado

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw new ErrorPiezaDefectuosa("Pieza defectuosa");

    correctas++;
  } catch (ex) {
    console.log("console the ex", ex);
    console.log(typeof ex);
    defectuosas++;
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);




//Example Haciendo un nuevo CONSTRUCTOR,esto seria utilizando herencia
const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

class ErrorPiezaDefectuosa extends Error {
  constructor(num) {
    super(`Pieza ${num} defectuosa`);       //Utilizando constructor
  }
}

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw new ErrorPiezaDefectuosa("5"); //pasandole valor

    correctas++;
  } catch (ex) {
    console.log("console the ex", ex);
    console.log(typeof ex);
    defectuosas++;
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);





// Anadiendo dos errores 1

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;


const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;
class ErrorPiezaDefectuosa extends Error {}

class ErrorCadenaParada extends Error {} //Creamos otro error cadena parada

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (i === 2) throw new ErrorPiezaDefectuosa("Se paro"); //Cuando lleguemos a la iteracion 2  tenemos error
    //cadena parada
    if (esDefectuosa) throw new ErrorCadenaParada("Pieza Defectuosa");

    correctas++;
  } catch (ex) {
    console.log("console the ex", ex);
    defectuosas++;
  }
}
console.log(`Fabricadas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);



// Anadiendo dos errores 2 ,  console.log(typeof ex);

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;


const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;
class ErrorPiezaDefectuosa extends Error {}

class ErrorCadenaParada extends Error {}

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (i === 2) throw new ErrorPiezaDefectuosa("Cadena parada");
    if (esDefectuosa) throw new ErrorCadenaParada("Pieza Defectuosa");

    correctas++;
  } catch (ex) {
    console.log("console the ex", ex);
    console.log(typeof ex);
    defectuosas++;
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);



//INSTANCE OF
// Para hacer esto en condiciones, utilizamos instance of
//Podemos utilizar este instance of para saber  de que tipo es la excepcion

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

class ErrorPiezaDefectuosa extends Error {}

class ErrorCadenaParada extends Error {}
const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();

  try {
    if (i === 2) throw new ErrorPiezaDefectuosa("Cadena parada");
    if (esDefectuosa) throw new ErrorCadenaParada("Pieza Defectuosa");

    correctas++;
  } catch (ex) {
    //console.log("console the ex", ex);
    if (ex instanceof ErrorCadenaParada) console.log("Se ha parado la cadena");
    else if (ex instanceof ErrorPiezaDefectuosa)
      console.log(`La pieza  ${i} es defectuosa`);
    defectuosas++;
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);



// 6 ANIDANDO CATCH Y RELANZANDO ERRORES
//En el anterior codigo tenemos un problema, tendriaMOS que detener por completo la fabricacion, cuando se para la cadena

//Para lograR esto tenemos que relanzar la excepcion hacia arriba, podemos decir me ha llegado esta excepcion hago un console log de que se ha parado la cadena

//pero relanzo la excepcion.
//La lanzo hacia arriba, cuando la lanzo hacia arriba desde un catch este catch ya no funciona el catch no se peude cacturar asi mismo
//Podemos capturarlo en otro catch superior pero en este no
const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

class ErrorPiezaDefectuosa extends Error {}

class ErrorCadenaParada extends Error {}
const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();

  //

  try {
    if (i === 2) throw new ErrorPiezaDefectuosa("Cadena parada");
    if (esDefectuosa) throw new ErrorCadenaParada("Pieza Defectuosa");

    correctas++;
  } catch (ex) {
    console.log("console the ex", ex);

    if (ex instanceof ErrorCadenaParada) {
      console.log("Se ha parado la cadena"); 
      
      throw ex; //se ha parado la cadena ,reLanzamos excepcion hacia arriba asi se para,aqui 
      //Cuando lo lanzo hacia arriba este catch ya no funciona
      //Es decir volvemos a lanzar la excepcion que nos ha llegado
      //Y aqui paramos por completo toda la ejecucion
    } else if (ex instanceof ErrorPiezaDefectuosa)
      console.log(`La pieza  ${i} es defectuosa`);
    defectuosas++;
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);





//A??adiendo un try arriba de todo . que envolviese a todo el try y un catch de ex

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

class ErrorPiezaDefectuosa extends Error {}

class ErrorCadenaParada extends Error {}
const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  //Adding try envolving the other try
  try { 
    try {
      if (i === 2) throw new ErrorPiezaDefectuosa("Cadena parada");
      if (esDefectuosa) throw new ErrorCadenaParada("Pieza Defectuosa");

      correctas++;
    } catch (ex) {
      console.log("console the ex", ex);

      if (ex instanceof ErrorCadenaParada) {
        console.log("Se ha parado la cadena");
        //Lanzamos excepcion hacia arriba asi se para
        throw ex;
      } else if (ex instanceof ErrorPiezaDefectuosa)
        console.log(`La pieza  ${i} es defectuosa`);
      defectuosas++;
    }
    //Adding catch from Try involving the other try
  } catch (ex) {
    console.log("Hemos llegado aqui");
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);
