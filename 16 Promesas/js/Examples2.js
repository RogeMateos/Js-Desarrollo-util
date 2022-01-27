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
04

PROMISE 
Porque no proporcionamos un mecanismo standard para lograrlo pues esto son LAS PROMESAS
El tener que hacer el ejemplo anterior con callbacks generaba bastantes problemas
Callback hell

cuando decimos que devuelve void se refiere a que no tiene un return como tal  new Promise( void al estar vacio) 
Resolve y reject se pueden ejecutar en cualquier momento de la funcion
El resolve es lo que se mandara al .then de las promesas
El Reject se mandara al punto catch de las promesas
------------------------------------------------------------
*/

//  Creando Promesa de base

new Promise((resolve, reject) => {
  resolve(5); //El resolve es lo que se mandara al .then de las promesas
  reject(new Error()); //
});

/*
Codigo original Sin Promesa
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  let number = toNumber(n);
  number = multiply(number);
  print(number);
};



const catchAndPrint = (err) => console.log(err);

const request = (url, catchFn, then) => {
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
request("./js/numero.txt", catchAndPrint, thenFn);

/*
Cambiando codigo a promesa
Creando promesa
Si queremos convertir este request en una promesa lo primero que tenemos que hacer es que devuelva
una promesa
Esa promesa tiene que tener un resolve y reject y tiene que devolver una funcion, asi que metemos 
dentro toda la funcion 
Reject es el caso en que esta promesa resuelve el error
Reject y resolve son funciones que reciben un solo parametro 
Reject tenemos que aplicarlo donde antes teniamos los catch

*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  let number = toNumber(n);
  number = multiply(number);
  print(number);
};

const catchAndPrint = (err) => console.log(err);

//promesa
const request = (url, catchFn, then) => {//Request devolvera una promesa
  return new Promise((resolve, reject) => {
    //Promesa que tiene que devolver una funcion,
    //Reject es el caso en que esta promesa resuelve el error
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        then(req.responseText); //eL resolve seria en  el then
      } else {
        catchFn(new Error("error al cargar")); //aplicaremos en los catch los rejects
      }
    };
    req.onerror = () => {
      catchFn(new Error("error de la red"));
    };

    req.send();
  });
};
request("./js/numero.txt", catchAndPrint, thenFn);

/*
Reject es basicamente el caso de error,el caso  que esta promesa resuelve  error
Resolve y reject son funciones que reciven un solo parametro

Aplicar reject dodne antes teniamos catchFtn

Y resolve seria el then, seria en el caso correcto que datos nos resuelve esta promesa 
para los siguientes Then
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  let number = toNumber(n);
  number = multiply(number);
  print(number);
};

const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

//promesa
//Aqui ya no necesitamos catchFN,Then
const request = (url) => {
  //en request no necesitamos no catch ni then
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        //1
        resolve(req.responseText); ////eL resolve seria en  el then de antes
        //Es decir en el caso correcto que datos nos devuelve esta promesa
      } else {
        //2
        reject(new Error("error al cargar")); //aplicaremos en los catch los rejects
      }
    };

    req.onerror = () => {
      //3
      reject(new Error("error de la red")); //Esta seria la razon porque esta promesa ha rellectado, lo mismo arriba el otro reject
    };

    req.send();
  });
};
request("./js/numero.txt"); // no necesitamos no catch ni then

/*
------------------------------------------------------------
05

PROMISE  THEN

Sino necsitamos no el catch ni el then que es loq eu vamos a hacer a continuacion?

Necesitamso pasar estos catch y estos then que borramos en const request function
anteriormente de una forma especial  .then
A este then(el de abajo de todo ) le va a llegar este valor  req.responseText) que sale por resolve resolve(req.responseText);

Un resolve en una promesa es como un return , en el momento que se ejecuta resolve es como si fuera
una especie de return de la promesa y es lo que le va a llegar a este then de abajo

Entonces si ponemos then(data => console.log(data)); lo que le llega a este then es el 5
------------------------------------------------------------
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  let number = toNumber(n);
  number = multiply(number);
  print(number);
};

const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

//promesa
//Aqui ya no necesitamos catchFN,Then
const request = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        //Al then le llega este valor
        resolve(req.responseText);
      } else {
        //2
        reject(new Error("error al cargar"));
      }
    };

    req.onerror = () => {
      //3
      reject(new Error("error de la red"));
    };

    req.send();
  });
};
//al then le llega este valor req.responseText que sale por resolve
request("./js/numero.txt").then((data) => console.log(data)); //si ponemos un console log the data lo que vemos que 
//le llega es el 5, es decir el req.responseText

/*
------------------------------------------------------------
05.1

PROMISE  THEN

Que podemos hacer  con el then? Pues por ejemplo pasar a tonumber
Lo especial the los then es que lo que devuelve esta funcion then a su vez se pasa al siguiente then

request("./js/numero.txt").then(toNumber).then(multiply).then(print); cinco lo paso a multiply y el multiply a print

Podemos seguir poneindo then y pasar el resultado de este then al siguiente then como parametro de entrada


El thenfn ya no tiene sentido, ya no tenemos que crear funciones complejas ni getiona un calbback hell 

Porque podemos anidar los then 


------------------------------------------------------------
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

/*
Este thenfn ya no tiene sentido , por esto
lo que decuelve esta funcion then(toNumber) a su vez se passa al siguiente then then(multiply).then(print);
Ya no tenemos que crear funciones conplejas ni gestionar callback hell  porque podemos anidar los then
de forma que nos queda bastante sencillo 

const thenFn = (n) => { 
  let number = toNumber(n);
      number = multiply(number);
      print(number);
}
*/

const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

//promesa
//Aqui ya no necesitamos catchFN,Then
const request = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        //Al then le llega este valor
        resolve(req.responseText);
      } else {
        //2
        reject(new Error("error al cargar"));
      }
    };

    req.onerror = () => {
      //3
      reject(new Error("error de la red"));
    };

    req.send();
  });
};

//5 esto seria la version con data , abajo seria lo equivalente
//request("./js/numero.txt").then((data) => toNumber(data)); 

// lo que decuelve esta funcion then(toNumber) a su vez se passa al siguiente then then(multiply).then(print);
request("./js/numero.txt").then(toNumber).then(multiply).then(print);//10


//Si pusiera text2 aun no estariamos gestionando los errores para eso necesitamos el metodo catch
//ver explicacion abajo
//request("./js/numero.txt2").then(toNumber).then(multiply).then(print);//10



/*
------------------------------------------------------------
05.2
Catch
Gestionando errores

request ("./js/numero2.txt"
Esto antes me daba un error pero ahora no

Para solucionar eso tenemos que poner el metodo catch

Catch lo que recive es lo que pasamos a reject en este caso peude ser un error de error al cargar
  reject(new Error("error al cargar")); o error red   reject(new Error("error de la red")); 

Entonces en este catch podemos pasarle  catchAndPrint que es una funcion que captura este error

Los then is los catch podemos seguir anidandolos tantas veces como queramos

------------------------------------------------------------
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

//promesa
//Aqui ya no necesitamos catchFN,Then
const request = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        //Al then le llega este valor
        resolve(req.responseText);
      } else {
        //2
        reject(new Error("error al cargar"));//Catch lo que recibe esl o que le pasamos a reject
      }
    };

    req.onerror = () => {
      //3
      reject(new Error("error de la red"));
    };

    req.send();
  });
};
request("./js/numero.txt2")
  .then(toNumber)
  .then(multiply)
  .then(print)
  .catch(catchAndPrint); //captura el error de  const catchAndPrint = (err) => console.log(err); que lo recibe de  reject(new Error("error al cargar"));

/*
------------------------------------------------------------
05.3
Mostrando que puedo anidar metiendo mas multiplies


   .then(print) //80
  .then(print) //Undefined  porque  const print = (n) => console.log(n);,  console.log undefined

Incluso podria intentar imprimirlo dos veces, pero me daria undefined 
Porque esta request da un resultado  request ("./js/numero.txt"), este resultado se le pasa al 
primer then,el resultado de el then se pasa a multiply,y el de multiply a el siguiente hasta llegara print
en print nos da 80,
Pero el print devuelve const print = (n) => console.log(n);, y console log devuelve undefined
si metemos un print debajo lo que estamos haciendo es mandar un undefined

------------------------------------------------------------
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

//promesa
//Aqui ya no necesitamos catchFN,Then
const request = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        //Al then le llega este valor
        resolve(req.responseText);
      } else {
        //2
        reject(new Error("error al cargar"));
      }
    };

    req.onerror = () => {
      //3
      reject(new Error("error de la red"));
    };

    req.send();
  });
};
request("./js/numero.txt")
  .then(toNumber)
  .then(multiply)//10
  .then(multiply)//20
  .then(multiply)//30
  .then(multiply)
  .then(print) //80
  .then(print) //Undefined  porque  const print = (n) => console.log(n);,  console.log undefined
  .catch(catchAndPrint);

/*
------------------------------------------------------------
05.4
Añadiendo return to const print = (n) => console.log(n);
Para que el segundo print no sea undefined

const print = (n) => {
    console.log(n); 
    return n + 1;  
}


Normalmente esto no lo hacemos porque el comportamiento standard de una promesa, es que el ultimo then
ya no es necesareo qeu retorne nada 

------------------------------------------------------------
*/
const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => {  // aqui le  añadimos un return de n +1 para que el segundo then print funcione
  console.log(n);
  return n + 1;
};

const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);



const request = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        //Al then le llega este valor
        resolve(req.responseText);
      } else {
        //2
        reject(new Error("error al cargar"));
      }
    };

    req.onerror = () => {
      //3
      reject(new Error("error de la red"));
    };

    req.send();
  });
};
request("./js/numero.txt")
  .then(toNumber)
  .then(multiply)
  .then(multiply)
  .then(multiply)
  .then(multiply)
  .then(print) //80
  .then(print) //81
  .catch(catchAndPrint);
