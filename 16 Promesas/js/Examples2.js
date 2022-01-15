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
El tener que hacer el ejemplo anterior con callbacks generaba bastantes problemas
Callback hell

cuando decimos que devuelve void se refiere a que no tiene un return como tal
Resolve y reject se pueden ejecutar en cualquier momento de la funcion
El resolve es lo que se mandara al .then de las promesas
El Reject se mandara al punto catch de las promesas
------------------------------------------------------------
*/

//  Creando Promesa de base

new Promise((resolve,reject)=> {
 resolve(5)
 reject (new Error())
})
 

/*
Cambiando codigo a promesa

Cpdigo original
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

const request = (url,catchFn,then) => {
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
request ("./js/numero.txt",catchAndPrint,thenAlt,);


/*
Creando promesa
Si queremos convertir este request en una promesa lo primero que tenemos que haces es que devuelva
una promesa
Esa promesa tiene que tener un resolve y reject y tiene que devolver una funcion, asi que metemos 
dentro dola la funcion 
*/




const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => { 
  let number = toNumber(n);
      number = multiply(number);
      print(number);
}



const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

//promesa
const request = (url,catchFn,then) => {
    return new Promise ((resolve,reject) => {
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

    } )  
};
request ("./js/numero.txt",catchAndPrint,thenAlt,);






/*
Reject es basicamente el caso de error,el caso  que esta promesa resuelve  error
Resolve y reject son funciones que reciven un solo parametro

Aplicar reject dodne antes teniamos catchFtn

Y resolve serai el then, seria en el caso correcto que datos nos resuelve esta promesa 
para los siguientes Then
*/



const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => { 
  let number = toNumber(n);
      number = multiply(number);
      print(number);
}



const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

//promesa
//Aqui ya no necesitamos catchFN,Then
const request = (url) => {
    return new Promise ((resolve,reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url) ;

        req.onload = () => {
            if(req.status === 200) {
              //1
              resolve(req.responseText);
            }
            else{
              //2
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
              //3
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};
request ("./js/numero.txt",catchAndPrint,thenAlt,);


/*
------------------------------------------------------------
05

PROMISE  THEN

Necesitamso pasar estos catch y estos then que borramos en const request function
anteriormente de una forma especial  .then
A este then(el de abjo de todo ) le va a llegar este valor  req.responseText) que sale por resolve resolve(req.responseText);

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
}



const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

//promesa
//Aqui ya no necesitamos catchFN,Then
const request = (url) => {
    return new Promise ((resolve,reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url) ;

        req.onload = () => {
            if(req.status === 200) {
              //Al then le llega este valor 
              resolve(req.responseText);
            }
            else{
              //2
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
              //3
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};
request ("./js/numero.txt").then((data) => console.log(data));// 5 . Data es el  resolve(req.responseText);




/*
------------------------------------------------------------
05.1

PROMISE  THEN

Lo especial the los then es que lo que devuelve esta funcion then a su vez se pasa al siguiente then

Podemos seguir poneindo then y pasar el resultado de este then al siguiente then como parametro de entrada


El thenfn ya no tiene sentido, ya no tenemos que crear funciones complejas ni getiona un calbback hell 

Porque podemos anidar los then 


------------------------------------------------------------
*/


const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

/*
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
    return new Promise ((resolve,reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url) ;

        req.onload = () => {
            if(req.status === 200) {
              //Al then le llega este valor 
              resolve(req.responseText);
            }
            else{
              //2
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
              //3
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};
request ("./js/numero.txt").then(toNumber).then(multiply).then(print);




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
    return new Promise ((resolve,reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url) ;

        req.onload = () => {
            if(req.status === 200) {
              //Al then le llega este valor 
              resolve(req.responseText);
            }
            else{
              //2
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
              //3
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};
request ("./js/numero.txt2").then(toNumber).then(multiply).then(print).catch(catchAndPrint);




/*
------------------------------------------------------------
05.3
Mostrando que peudo anidar metiendo mas multiplies

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
    return new Promise ((resolve,reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url) ;

        req.onload = () => {
            if(req.status === 200) {
              //Al then le llega este valor 
              resolve(req.responseText);
            }
            else{
              //2
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
              //3
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};
request ("./js/numero.txt")
.then(toNumber)
.then(multiply)
.then(multiply)
.then(multiply)
.then(multiply)
.then(print)//80
.then(print)//Undefined  porque  const print = (n) => console.log(n);,  console.log undefined
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


------------------------------------------------------------
*/
const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => {
    console.log(n); 
    return n + 1;  
}



const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

//promesa
//Aqui ya no necesitamos catchFN,Then
const request = (url) => {
    return new Promise ((resolve,reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url) ;

        req.onload = () => {
            if(req.status === 200) {
              //Al then le llega este valor 
              resolve(req.responseText);
            }
            else{
              //2
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
              //3
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};
request ("./js/numero.txt")
.then(toNumber)
.then(multiply)
.then(multiply)
.then(multiply)
.then(multiply)
.then(print)//80
.then(print)//91
.catch(catchAndPrint);