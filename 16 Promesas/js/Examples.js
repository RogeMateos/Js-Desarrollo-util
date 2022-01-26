/*

*/

/*
    ||    console.log(``);    ` `    ||
*/

/*
------------------------------------------------------------
PROMESAS
------------------------------------------------------------
*/

/*
------------------------------------------------------------
02
LA BASE DE UNA REQUEST

Haciendo una solicitud con el javascript original, javascript boomer

Necesitamos algun tipo de solicitud asincrona que nos demuestre como funcionan las promesas
Aprovechamos el liver server que tenemos abierto en el puerto 5500
Este servidor nos permite hacer peticiones en base a recursos 

Creamos un archivo txt y almacenamos un numero
Lo que vamos a hacer es una peticion a este servidor en busca de este recurso numero.txt para ver su valor
y poder hacer operaciones con el 
Esto lo haremos a traves de el protocolo http una solicitud  tradicional 
Existen otras alternativas a dia de hoy como fetch pero vamos a ir a la base de todo
Como se hacia cuando fetch y promesas no existia
------------------------------------------------------------
*/



/*
02  Example 1
*/
const req = new XMLHttpRequest();
req.open("GET", "./js/numero.txt"); //Abrir request el el que le indicamos el metodo que queremos utilizar y la Url que queremos solicitar

req.onload = () => {
  //Respuesta que tenemos de la peticion hacemos algo con ella
  console.log("OK");
};

req.onerror = () => {
  console.log("Error");
};

req.send(); // OK
/*




/*
02  Example 1.1
*/
const req = new XMLHttpRequest();
req.open("GET", "./js/numero.txt"); //Abrir request el el que le indicamos el metodo qu queremos utilizar y la Url que queremos solicitar

req.onload = () => {
  //Respuesta que tenemos de la peticion hacemos algo con ella
  console.log(req.status, req.responseText); //Tenemos estas dos propiedades que ya se han cargado
};

req.onerror = () => {
  console.log("Error");
};

req.send(); // send envia peticion  200 seria ok , y nos devuelve un "5" , el contenido de el archivo



/*
02  Example2
*/

const req = new XMLHttpRequest();
req.open("GET", "./js/numero.txt2"); //Cambiamos path , estos nos dara error

req.onload = () => {
  //Entra en el onload y nos va aa devolver la pagina tradicional con 404
  console.log(req.status, req.responseText);
};

req.onerror = () => {
  console.log("Error");
};

req.send(); //Esto nos dara un error 404 con la pagian tradicional
//<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET /16%20Promesas/js/numero.txt2</pre>\n</body>\n</html>\n'

/*
02  Example3
Distinguiendo si status es igual a 200
Esto seria el esqueleto Basico
*/

const req = new XMLHttpRequest();
//req.open('GET', './js/numero.txt2') Error
req.open("GET", "./js/numero.txt"); //5

req.onload = () => {
  //  console.log(req.status, req.responseText);
  if (req.status === 200) {
    console.log(req.responseText);
  } else {
    console.log("Error");
  }
};

req.onerror = () => {
  console.log("Error");
};

req.send(); //5

/*
02  Example4
Ejemplo de lo que se solia hacer
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const req = new XMLHttpRequest();
req.open("GET", "./js/numero.txt");

req.onload = () => {
  if (req.status === 200) {
    let number = toNumber(req.responseText);
    number = multiply(number);
    print(number);
  } else {
    console.log("Error");
  }
};

req.onerror = () => {
  console.log("Error");
};

req.send(); //10



/*
------------------------------------------------------------
03 
REESCRIBIENDO CON CALLBACK
------------------------------------------------------------
*/

/*
03 01 
//Crear una funcion pasando request /numero.txt

Pero aqui nos viene un problema de usabilidad, yo quiero cargar archivo
numero.txt, pero el comportamiento que quiero hacer a posteriori quiero pasarselo como funcion, como callback
Y tambien quiero pasarle como callback el error

*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

//Crear una funcion pasando request /numero.txt
//Con esto reutilizamos la peticion http
const request = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url);

  req.onload = () => {
    if (req.status === 200) {
      let number = toNumber(req.responseText);
      number = multiply(number);
      print(number);
    } else {
      console.log("Error al cargar");
    }
  };

  req.onerror = () => {
    console.log("Error de red"); //Direcion que no existe
  };

  req.send();
};
request("./js/numero.txt"); //10
request("./js/numero.txt1"); //error al cargar
request("http://meloinvento.com"); //Error en la red .   Acceder a una direcion que no existe



/*
3 02 Pasandoselo como funcion
Como callback, y tambien quiero pasarle como callback el error
Primero le pasamos como callback la funcion then 
Ejemplo con Then 
Pasarle como callback la funcion 
Pasarle como callback el error
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  //Pasamos funcion then que recibe un number
  let number = toNumber(n);
  number = multiply(number);
  print(number);
};

const request = (url, then) => {
  const req = new XMLHttpRequest();
  req.open("GET", url);

  req.onload = () => {
    if (req.status === 200) {
      then(req.responseText); //Aqui ejecuto then con req.responseText,req.responseText
      //seria el number de la funcion thenFn
    } else {
      console.log("Error al cargar");
    }
  };

  req.onerror = () => {
    console.log("Error de red");
  };

  req.send();
};
request("./js/numero.txt", thenFn); //Pasamos el Thenfn



/*
03 03
Pasando una funcion de catch como callback
*/
const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  let number = toNumber(n);
  number = multiply(number);
  print(number);
};

const catchAndPrint = (err) => console.log(err); //Funcion de catch
console.log(catchAndPrint);

const request = (url, then, catchFn) => {
  //catchfn no le podemos llamar catch porque esta reservada
  const req = new XMLHttpRequest();
  req.open("GET", url);

  req.onload = () => {
    if (req.status === 200) {
      then(req.responseText);
    } else {
      catchFn(new Error("error al cargar")); //Recomendables que estos catchs no lancen un mensaje como tal, sino que lancen un new error
      //console.log('Error al cargar')
    }
  };

  req.onerror = () => {
    catchFn(new Error("error de la red")); //Aqui lo que hacemos es logear el error
    //console.log("Error de red");
  };

  req.send();
};
request("./js/numero.txt", thenFn, catchAndPrint);

request("./js/numero.txt1", thenFn, catchAndPrint);

request("http://meloinvento.com/a,", thenFn, catchAndPrint);



/*
03 04 
Ejemplo creando una funcion thenAlt
Podiramos crear otra funcion thenaAlt que seria un callback y el codigo , seria reutilizable
simplemente estariamos pasando otro callback diferente el de thenAlt en vez de thenFn
PROBLEMA ANIDANDO CALLBACKS
El problema vendria cuando queremos anidar callbacks y muchos callbacks
Ejemplo un callback que quiere otro callback y otro y otro


El tener que hacer todo esto con callbacks generaba bastante problemas, cada uno lo hacia a su manera 
no se acababa uno de poner de acuerdo con lo que era el standard , unos le llamaban then otros callback otros siguiente

Entonces se dijo si esto viene a ser asi lo mismo es decir una funcion que se ejecute cuando todo va bien y otra cuando todo va mal

Porque no proporcionamos un mecanismo standard para lograrlo pues esto son LAS PROMESAS


*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  let number = toNumber(n);
  number = multiply(number);
  print(number);
};

//No necesito cambiar mi logica de request
const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

const request = (url, then, catchFn) => {
  const req = new XMLHttpRequest();
  req.open("GET", url);

  req.onload = () => {
    if (req.status === 200) {
      then(req.responseText);
    } else {
      catchFn(new Error("error al cargar"));
    }
  };

  req.onerror = () => {
    catchFn(new Error("error de la red"));
  };

  req.send();
};
request("./js/numero.txt", thenAlt, catchAndPrint); //5 aqui daria 5 porue no estariamos pasando el callback thenFn  que hace la multiplicacion sino el thenalt que solo pasa el numero 5 de el numero.txt
