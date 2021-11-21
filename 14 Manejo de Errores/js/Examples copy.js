/*
Example 1
*/

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;


for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  console.log(esDefectuosa);

  if (esDefectuosa) throw `pieza de ${i} defectuosa`;

  console.log(`pieza ${i} fabricada`);
}




/*
Example 2
*/

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw ` -> pieza de ${i} defectuosa`;
  } catch (ex) {
    console.log("Console ex", ex);
  }

  console.log(`pieza ${i} fabricada`);
}



/*
Example 3
*/

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;


for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw ` -> pieza de ${i} defectuosa`;

    console.log(`pieza ${i} fabricada`);
  } catch (ex) {
    console.log("Console ex", ex);
  }
}



/*
Example 4
Numero errores, numero de aciertos
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

    //console.log(`pieza ${i} fabricada`);
    correctas++;
  } catch (ex) {
    defectuosas++;
    //console.log(ex);
  }
}

console.log(`Fabricacas: ${NUM_PIEZAS}`);
console.log(`-> Correctas ${correctas}`);
console.log(`-> Defectuosas: ${defectuosas}`);






/*
Example 5
Bloque Finally
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
Example 6
Explicando clase error 1
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
    console.log("console the ex", ex);
    console.log(typeof ex);
    defectuosas++;
  }
}
console.log(`Fabricacas: ${NUM_PIEZAS}:`);
console.log(`-> Correctas ${correctas}:`);
console.log(`Defectuosas: ${defectuosas}:`);



/*
Example 7
Explicando clase error 2
*/
const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

const comprobarSiEsdefectuosa = () => Math.random() < PROB_ERROR;

for (let i = 1; i <= NUM_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsdefectuosa();
  try {
    if (esDefectuosa) throw new Error("Pieza defectuosa");

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
Example 9
Explicando clase error 3
*/

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
  const esDefectuosa = comprobarSiEsdefectuosa();
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
