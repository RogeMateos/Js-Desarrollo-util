
/*

*/


/*
    ||    console.log(``);    ` `
*/


/*
------------------------------------------------------------
------------------------------------------------------------
*/


//FUNCTIONS

/*
01 
DEFINICION Y EJEMPLO DE FUNCION
Function
Tipo de datos que se utiliza para reutilizar código




*/

//FUNCION NOMINAL

function saludar(nombre) {
    console.log(  `hola ${nombre}, bienvenido a desarrollo Util `)
 
}
saludar("Roge");


//Las funciones pueden tener un unico valor de salida 
//Pero podemos jugar un poco con las funciones , siempre tnemos ue devolver unico tipo de datos 
//pero ese tipo de datos puede ser un objeto y ese objeto puede contener varios valores 

function saludar(nombre) {
    return (`hola ${nombre}, bienvenido a desarrollo Util`);
}
const resultado =saludar("Roge");
console.log("DESPUES DE LLAMAR",resultado);


//Cuando ponermos return ademas de devolver el valor la funcion termina 

function saludar(nombre) {
    return (`hola ${nombre}, bienvenido a desarrollo Util`);
    console.log("despues de el return")
}
const resultado =saludar("Roge");
console.log("DESPUES DE LLAMAR",resultado);


//Este tipo de funcion nominales, que tienen un nombre, se puede llamar asi, tanto antes como despues de declararla

const resultado =saludar("Roge");
console.log("DESPUES DE LLAMAR",resultado);

function saludar(nombre) {
    return (`hola ${nombre}, bienvenido a desarrollo Util`);
    console.log("despues de el return")
}




/*
------------------------------------------------------------
------------------------------------------------------------
*/




/*
02
FUNCIONES ANONIMAS

Son funciones que no tienen nombre y lo que hacemos es almacenarlas en una variable 
El nombre de la funcion va a ser igual a el nombre de la Variable
*/


//Funcion Nominal
function saludar(nombre) {
    return (  `hola ${nombre}, bienvenido a desarrollo Util `)
}

//Transformando a funcion nominal a anonima

const saludar2 =function(nombre) {
    console.log(  `hola ${nombre}, bienvenido a desarrollo Util `)
}

const resultado = saludar("pablo")
const resultado = saludar2("pablo")
console.log(resultado);

//Las funciones anonimas y nominales no son equivalentes de el todo 
//Las funciones anonimas con una constante entonces se aplican todas las reglas que a una constante



//LLamando variable Anonima antes de declararla, no se puede da error se aplican las mismas leyes que las variables y constantes

const resultado = saludar2("pablo")
const saludar2 =function(nombre) {
    console.log(  `hola ${nombre}, bienvenido a desarrollo Util `)
}

console.log(resultado);


//Ventajas respecto a los nominales
//Podemos pasar esas funciones como parametros a otras funciones 


//1 step

const obtenerSaludo = function (nombre) {
  return  ` hola ${nombre}, bienvenido a desarrollo util`; //Este codigo en este paso aun no se ejecuta
  };
  
  
  
  const saludar = function (mensaje) {
     console.log(mensaje);
  };
  
  
  const resultado = saludar ("pablo");
  console.log(resultado); //Pablo






//2 Step



const obtenerSaludo = function (nombre) {
return  ` hola ${nombre}, bienvenido a desarrollo util`;
};



const imprimir = function (mensaje) {
   console.log(mensaje);
};

const saludar = function(obtener,imprimir) {
   const saludo = obtener("Pablo") 
   imprimir(saludo);
};

const resultado = saludar (obtenerSaludo,imprimirSaludo);
console.log(resultado);




//Esta funcion me vale tanto como para imprimir el saludo por consola como el alert
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







/*
------------------------------------------------------------
------------------------------------------------------------
*/



/*
03
ARROW FUNCTIONS

*/
const sumar = function (a,b) {
    return a + b
  }
  
  const multiplicarPorDos = function (numero) {
    return numero * 2
  }
  
  const suma = sumar(2,3);
  const multiplicacion = multiplicarPorDos (suma);
  console.log(multiplicacion);
 
  
  //Convirtiendo  ARROW
  
  const multiplicarPorDos =  (numero) =>{
    return numero * 2
  }

 
  const multiplicarPorDos =  numero =>{
    return numero * 2
  }

  const multiplicarPorDos =  numero => numero * 2
  