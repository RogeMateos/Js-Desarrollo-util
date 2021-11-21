
/*
Example 1
Exceptiones custom
Mas de una posibilidad de fallo
Lo haremos extendiendo la clase error Extendiendo clase error
*/


const NUM_PIEZAS = 5;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

class ErrorPiezaDefectuosa extends Error {}

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
console.log(`-> Defectuosas: ${defectuosas}:`);





/*
Example 2
//Example Haciendo un nuevo constructor
*/


const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

class ErrorPiezaDefectuosa extends Error {
  constructor(num) {
    super(`Pieza ${num} defectuosa`);
  }
}

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw new ErrorPiezaDefectuosa("5");

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
Example 3
// Anadiendo dos errores
*/

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
    if (i === 2) throw new ErrorPiezaDefectuosa("Se paro");
    if (esDefectuosa) throw new ErrorCadenaParada("Pieza Defectuosa");

    correctas++;
  } catch (ex) {
    console.log("console the ex", ex);
    defectuosas++;
  }
}
console.log(`Fabricadas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`-> Defectuosas: ${defectuosas}:`);




/*
Example 4
// Instance Of, lo utilizamos para saber de que tipo es la excepcion
*/


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
    if (i === 2) throw new ErrorPiezaDefectuosa("Se paro");
    if (esDefectuosa) throw new ErrorCadenaParada("Pieza Defectuosa");

    correctas++;
  } catch (ex) {
    console.log("console the ex", ex);
    if (ex instanceof ErrorCadenaParada) console.log("Se ha parado la cadena");
    else if (ex instanceof ErrorPiezaDefectuosa)
    console.log(`La pieza  ${i} es defectuosa`);
    defectuosas++;
  }
}
console.log(`Fabricadas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`-> Defectuosas: ${defectuosas}:`);










/*
Example 5 
Deteniendo programa cuando cadena se ha parado, relanzando excepcion hacia arriba
*/


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

    if (ex instanceof ErrorCadenaParada) {
      console.log("Se ha parado la cadena");
      //Lanzamos excepcion hacia arriba asi se para,cuando se para la cadena paramos por completo toda la ejecucion
      throw ex;
    } else if (ex instanceof ErrorPiezaDefectuosa)
      console.log(`La pieza  ${i} es defectuosa`);
    defectuosas++;
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`-> Defectuosas: ${defectuosas}:`);








/*
Example 6
Añadiendo un try arriba de todo . que envolviese a todo el try y un catch de ex
*/

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