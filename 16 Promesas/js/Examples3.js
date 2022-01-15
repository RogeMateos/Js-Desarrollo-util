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
4
PROMISE Catch

De la ejecucion de todos estos Then es posible que sucedan errores
Hemos visto que se capturan en este catch .catch(catchAndPrint);

Veremos este catch en profundidad

modificamos funcion multiplicar


El catch no es solo para el request sino que vale para cualquiera de los  then

------------------------------------------------------------
*/const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply",n);
  if (n > 10) throw new Error ("Error");
  return n *2;
}; 
const print = (n) => console.log(n); 



const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);


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
.then(multiply)//20  aqui se para la cadena de then ,cuando encontramos error saltamos al catch
.then(multiply)
.then(print)
.then(print)
.catch(catchAndPrint);// Saltamos aqui al catch



/*
------------------------------------------------------------
4.1
PROMISE Catch
Podemos poner mas de un catch 

Lo que podemos hacer con el catch en este caso (con el primero) es capturar y devolver un valor,y que entonces
el siquiente then se ejecute con ese valor


------------------------------------------------------------
*/const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply",n);
  if (n > 10) throw new Error ("Error");
  return n *2;
}; 
const print = (n) => console.log(n); 



const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);


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
.then(print)
.then(print)
.catch(catchAndPrint)//Este catch llega se ejecuta pero no funciona como los .then
.catch(catchAndPrint);



/*
------------------------------------------------------------
4.2
PROMISE Catch
Poniendo catch debajo de el error multiply

sigue haciendo multiply de undefine porque este .catch(catchAndPrint) //error no ha devuelto nada
Este catch captura el error hace un comportamiento y permite que sigan el resto de then


------------------------------------------------------------
*/const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply",n);
  if (n > 10) throw new Error ("Error");
  return n *2;
}; 
const print = (n) => console.log(n); 



const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);


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
.then(multiply)//5
.then(multiply)//10
.then(multiply)//20
.catch(catchAndPrint) //error
.then(multiply) //undefined
.then(multiply)//nan
.then(print)
.catch(catchAndPrint);





/*
------------------------------------------------------------
4.3
PROMISE Catch
Añadiendo en catch and print no solo devolvemos error sino que devolvemos un uno

const catchAndPrint = (err) => {
  console.log(err);
  return 1;

}

LO que devuelva este catch es lo que sel e pasa al siguiente then

Estos catchs no se van a ejecutar en serie pero cuando se captura un error 
se sigue la cadena de then 
Si ponemos then debajo de le catch todo lo que viene abajo se va a ejecutando

hay que tener mucho cuidado y vigilar el flujo del a ejecucion de estos then y estos catch

------------------------------------------------------------
*/


const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply",n);
  if (n > 10) throw new Error ("Error");
  return n *2;
}; 
const print = (n) => console.log(n); 



const thenAlt = (n) => console.log(n);


//añadiendo return 1 a error
const catchAndPrint = (err) => {
  console.log(err);
  return 1;

}
const request = (url) => {
    return new Promise ((resolve,reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url) ;

        req.onload = () => {
            if(req.status === 200) {
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
.then(multiply)//5
.then(multiply)//10
.then(multiply)//20
.catch(catchAndPrint) //error
.then(multiply) //1 pilla el 1 de el ccatch and print con el return 1
.then(multiply)//2
.then(print)//4
.catch(catchAndPrint);




/*
------------------------------------------------------------
5 
FINALLY



------------------------------------------------------------
*/


const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply",n);
  if (n > 10) throw new Error ("Error");
  return n *2;
}; 
const print = (n) => console.log(n); 



const thenAlt = (n) => console.log(n);



const catchAndPrint = (err) => {
  console.log(err);
  return 1;

}
const request = (url) => {
    return new Promise ((resolve,reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url) ;

        req.onload = () => {
            if(req.status === 200) {
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
request ("./js/numero.txt") //5
//request ("./js/numero.txt2") Error al cargar
.then(print)
.catch(catchAndPrint);




/*
------------------------------------------------------------
5.1 
FINALLY

Hay ocasiones en las que queremos que independientemente de lo que haga si es then o catch , queremos que realice una accion
Para ese tenemos finally

Finally es un metodo que se ejecuta si o si independientemente si entra por el then o catch
y suele ser un metodo que sea al final, por ejemplo
1 Hacemos peticion base datos Buscame ete usuario
2 Lo encuentras? En el then me devuelves un usuario
3 No lo encuentras ?En el catch me devuelves un not found 
4 Pero al final siempre vas a tener que cerrar la conexion con la base de datos
Tanto si lo encuentras como sino la conexion tiene que quedar cerrada


------------------------------------------------------------
*/


const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply",n);
  if (n > 10) throw new Error ("Error");
  return n *2;
}; 
const print = (n) => console.log(n); 



const thenAlt = (n) => console.log(n);



const catchAndPrint = (err) => {
  console.log(err);
  return 1;

}
const request = (url) => {
    return new Promise ((resolve,reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url) ;

        req.onload = () => {
            if(req.status === 200) {
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
request ("./js/numero.txt") //5
//request ("./js/numero.txt2") Error al cargar
 .then(print)
 .catch(catchAndPrint)
 .finally(() => console.log("Se acabo la conexion"));






