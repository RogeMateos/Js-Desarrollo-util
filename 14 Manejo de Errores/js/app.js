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



  try {
    if (i === 2) throw new ErrorPiezaDefectuosa("Cadena parada");
    if (esDefectuosa) throw new ErrorCadenaParada("Pieza Defectuosa");

    correctas++;
  } catch (ex) {

    if (ex instanceof ErrorCadenaParada) {  console.log("Se ha parado la cadena");
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

