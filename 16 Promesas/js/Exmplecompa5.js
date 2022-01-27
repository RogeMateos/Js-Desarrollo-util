

/*
EXAMPLE CALLBACKS
Simmple
creando funcion
creando callbacks thenfn i catchfn
*/

/*
EXAMPLE 1
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
EXAMPLE 2
*/

const req = new XMLHttpRequest();
req.open("GET", "./js/numero.txt"); //Abrir request el el que le indicamos el metodo qu queremos utilizar y la Url que queremos solicitar

req.onload = () => {
  //Respuesta que tenemos de la peticion hacemos algo con ella
  console.log(req.status, req.responseText); // 200/5 Tenemos estas dos propiedades que ya se han cargado
};

req.onerror = () => {
  console.log("Error");
};

req.send(); // send envia peticion  200 seria ok , y nos devuelve un "5" , el contenido de el archivo




/*
EXAMPLE 03
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
EXAMPLE 04
*/


const req = new XMLHttpRequest();
req.open("GET", "./js/numero.txt"); //5

req.onload = () => {
  if (req.status === 200) {
    console.log(req.responseText);//5
  } else {
    console.log("Error");
  }
};

req.onerror = () => {
  console.log("Error");
};

req.send(); //5





/*
EXAMPLE 05
Ejemplo de lo que se solia hacer
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const req = new XMLHttpRequest();
req.open("GET", "./js/numero.txt");

req.onload = () => {
  if (req.status === 200) {
    let number = toNumber(req.responseText);//5
    number = multiply(number); //5 por 2
    print(number);             // 10
  } else {
    console.log("Error");
  }
};

req.onerror = () => {
  console.log("Error");
};

req.send(); //10





/*
EXAMPLE 06
Reescribiendo con callback, creando funcion pasando el ./js/numero.txt como parametro
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
EXAMPLE 07
Creando funcion thenFn que pasamos como callback
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);
//Creamos Funcion Thenfn que nos multiplica el numero
//pasandole el req.responseText
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
      then(req.responseText); //Aqui recibimod el callback  thenFn, que pilla el parametro req.responseText
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
EXAMPLE 08
Creando funcion Catch y pasandola como callback
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  let number = toNumber(n);
  number = multiply(number);
  print(number);
};

//Funcion catchandprint
const catchAndPrint = (err) => console.log(err); //Funcion de catch


const request = (url, then, catchFn) => {
  //catchfn, no le podemos llamar catch porque esta reservada
  const req = new XMLHttpRequest();
  req.open("GET", url);

  req.onload = () => {
    if (req.status === 200) {
      then(req.responseText);
    } else {
      catchFn(new Error("error al cargar")); //Recomendables que estos catchs no lancen un mensaje como tal, sino que lancen un new error
      //aqui Recibimos el callback cachandprint
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
EXAMPLE 09
Creando otra funcion llamada  Thenalt que reutilizariamos

Creando muchos callbacks genera el problema callback hell
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
