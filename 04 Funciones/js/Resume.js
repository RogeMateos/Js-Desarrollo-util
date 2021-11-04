function saludar(nombre) {
  console.log(`hola ${nombre}, bienvenido a desarrollo Util `);
}
saludar("Roge");

//Return

function saludar(nombre) {
  return `hola ${nombre}, bienvenido a desarrollo Util`;
}
const resultado = saludar("Roge");
console.log("DESPUES DE LLAMAR", resultado);

//Funcion anonima

const saludar2 = function (nombre) {
  console.log(`hola ${nombre}, bienvenido a desarrollo Util `);
};

const resultado = saludar2("pablo");
console.log(resultado);

//Callbacks

const obtenerSaludo = function (nombre) {
  return ` hola ${nombre}, bienvenido a Desarrollo util`;
};

const imprimirSaludo = function (mensaje) {
  console.log(mensaje);
};

const alertSaludo = function (mensaje) {
  alert(mensaje);
};

const saludar = function (obtener, imprimir) {
  const saludo = obtener("Pablo");
  imprimir(saludo);
};

saludar(obtenerSaludo, imprimirSaludo);

saludar(obtenerSaludo, alertSaludo);

//Arrow Finction

const multiplicarPorDos = (numero) => {
  return numero * 2;
};

const multiplicarPorDos = (numero) => {
  return numero * 2;
};

const multiplicarPorDos = (numero) => numero * 2;
