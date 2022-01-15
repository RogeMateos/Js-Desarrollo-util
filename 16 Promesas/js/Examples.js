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


------------------------------------------------------------
*/


/*
02  Example1
*/
const req = new XMLHttpRequest()
req.open('GET', './js/numero.txt')

req.onload = () => {
  console.log(req.status, req.responseText);
}

req.onerror = () => {
  console.log("Error");
};

req.send();//200 '5', 200 seria ok



/*
02  Example2
*/

const req = new XMLHttpRequest()
req.open('GET', './js/numero.txt2')

req.onload = () => {
  console.log(req.status, req.responseText);
}

req.onerror = () => {
  console.log("Error");
};

req.send();//Esto nos dara un error 404 con la pagian tradicional
//<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET /16%20Promesas/js/numero.txt2</pre>\n</body>\n</html>\n'



/*
02  Example3
Distinguiendo si status es igual a 200
Esto seria el esqueleto Basico
*/

const req = new XMLHttpRequest()
//req.open('GET', './js/numero.txt2') Error
req.open('GET', './js/numero.txt') //5


req.onload = () => {
  //  console.log(req.status, req.responseText);
  if(req.status ===200){
    console.log(req.responseText);
  }
  else{
    console.log('Error')
  }

}

req.onerror = () => {
  console.log("Error");
};

req.send();


/*
02  Example4
Ejemplo de lo que se solia hacer
*/


const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const req = new XMLHttpRequest()
req.open('GET', './js/numero.txt') 


req.onload = () => {
  if(req.status === 200) {
    let number = toNumber(req.responseText);
    number = multiply(number);
    print(number);
  }
  else{
    console.log('Error')
  }

}

req.onerror = () => {
  console.log("Error");
};

req.send();




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
numero.txt, pero el comportamiento que quiero hacer a posteriori quiero pasarselo como funcion
3 02 Pasandoselo como funcion
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);


const request = (url) => {
  const req = new XMLHttpRequest()
  req.open('GET', url) ;
  
  
  req.onload = () => {
    if(req.status === 200) {
      let number = toNumber(req.responseText);
      number = multiply(number);
      print(number);
    }
    else{
      console.log('Error al cargar')
    }
  
  }
  
  req.onerror = () => {
    console.log("Error de red");
  };
  
  req.send();
  
}
request ("./js/numero.txt");
request ("./js/numero.txt1");
request ("http://meloinvento.com");




/*
03 02
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
  let number = toNumber(n);
      number = multiply(number);
      print(number);
}


const request = (url,then) => {
  const req = new XMLHttpRequest()
  req.open('GET', url) ;
  
  
  req.onload = () => {
    if(req.status === 200) {
      then(req.responseText);
    }
    else{
      console.log('Error al cargar')
    }
  
  }
  
  req.onerror = () => {
    console.log("Error de red");
  };
  
  req.send();
  
}
request ("./js/numero.txt",thenFn);



/*
03 03
Pasando una funcion de catch
*/
const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => { 
  let number = toNumber(n);
      number = multiply(number);
      print(number);
}

const catchAndPrint = (err) => console.log(err);

const request = (url,then,catchFn) => {
  const req = new XMLHttpRequest()
  req.open('GET', url) ;
  
  
  req.onload = () => {
    if(req.status === 200) {
      then(req.responseText);
    }
    else{
      catchFn(new Error("error al cargar"));
      //console.log('Error al cargar')
    }
  
  }
  
  req.onerror = () => {
    catchFn(new Error("error de la red"));
    //console.log("Error de red");
  };
  
  req.send();
  
}
request ("./js/numero.txt",thenFn,catchAndPrint);

request ("./js/numero.txt1",thenFn,catchAndPrint);

request ("http://meloinvento.com/a,",thenFn,catchAndPrint);



/*
03 04
Ejemplo creando una funcion thenAlt
El problema vendria cuando queremos anifar callbacks y muchos callbacks
*/


const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => { 
  let number = toNumber(n);
      number = multiply(number);
      print(number);
}


//No necesito cambiar mi logica de request
const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

const request = (url,then,catchFn) => {
  const req = new XMLHttpRequest()
  req.open('GET', url) ;
  
  
  req.onload = () => {
    if(req.status === 200) {
      then(req.responseText);
    }
    else{
      catchFn(new Error("error al cargar"));
      
    }
  
  }
  
  req.onerror = () => {
    catchFn(new Error("error de la red"));
   
  };
  
  req.send();
  
}
request ("./js/numero.txt",thenAlt,catchAndPrint);



