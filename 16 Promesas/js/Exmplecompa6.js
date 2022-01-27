/*
PROMISES
*/


/*
EXAMPLE 01
Promesa base
*/
new Promise((resolve, reject) => {
    resolve(5); //El resolve es lo que se mandara al .then de las promesas
    reject(new Error()); //Se mandara al catch
  });



/*
EXAMPLE 02
Promesa base
Compararla con el ejemplo anterior sin promesa de Exemplecompleto1
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


const request = (url,) => {//Request devolvera una promesa,Catch y then ya no los necesitamos
    //PROMESA
  return new Promise((resolve, reject) => {
    //Promesa que tieneun rsolve y reject y tiene que devolver una funcion,
    //Reject es el caso en que esta promesa resuelve el error
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        resolve(req.responseText); //eL resolve seria en  el then
      } else {
        reject(new Error("error al cargar")); //aplicaremos en los catch los rejects
      }
    };
    req.onerror = () => {
      reject(new Error("error de la red")); //aplicaremos en los catch los rejects
    };

    req.send();
  });
};
//no necesitamos catch ni then  como parametros como en el anterior ejemplo sin promesa
//A este then le llega este resolve  resolve(req.responseText);  linea 46
//si ponemos un console log the data lo que vemos que 
//le llega es el 5, es decir el req.responseText
request("./js/numero.txt").then((data) => console.log(data));//no necesitamos catch ni then








/*
EXAMPLE 03
Gestionando THEN
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

const catchAndPrint = (err) => console.log(err);


const request = (url,) => {
    //PROMESA
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        resolve(req.responseText); 
      } else {
        reject(new Error("error al cargar")); 
      }
    };
    req.onerror = () => {
      reject(new Error("error de la red")); 
    };

    req.send();
  });
};

//request("./js/numero.txt").then((data) => toNumber(data)); 

//Esto es el equivalente a lo de arriba  then((data) => toNumber(data));
//los then pasan sus valores a otro, // lo que decuelve esta funcion then(toNumber) a su vez se passa al siguiente then then(multiply).then(print);
request("./js/numero.txt").then(toNumber).then(multiply).then(print);//10









/*
EXAMPLE 03
Gestionando  Catch
*/

const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);



const catchAndPrint = (err) => console.log(err);


const request = (url,) => {
    //PROMESA
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        resolve(req.responseText); 
      } else {
        reject(new Error("error al cargar")); 
      }
    };
    req.onerror = () => {
      reject(new Error("error de la red")); 
    };

    req.send();
  });
};


request("./js/numero2.txt")
.then(toNumber)
.then(multiply)
.then(print)
.catch(catchAndPrint); //captura el error de  const catchAndPrint = (err) => console.log(err); que lo recibe de  reject(new Error("error al cargar"));




/*
EXAMPLE 04
Gestionando  Catch 2
//Durante ejecucion then puede que se produzcan errores
//que se capturan en el catch
*/
const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply", n);  //5,10,20
  if (n > 10) throw new Error("Error");
  return n * 2;
};
const print = (n) => console.log(n);

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
  .then(multiply) //20  aqui se para la cadena de then ,cuando encontramos error saltamos al catch
  .then(multiply)
  .then(print)
  .then(print)
  .catch(catchAndPrint); // Saltamos aqui al catch y  ya nos imprime el error porque   if (n > 10) throw new Error("Error"); no se cumple





  /*
EXAMPLE 05
Capturar y devolver un valor con el catch y que entonces el then se ejecute
con el siguiente valor
*/

const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply", n);
  if (n > 10) throw new Error("Error");
  return n * 2;
};
const print = (n) => console.log(n);

const thenAlt = (n) => console.log(n);

//añadiendo return 1 a error
//No solo devolvemos error sino que devolvemos un uno
const catchAndPrint = (err) => { 
  console.log(err);
  return 1;
};
const request = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
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
  .then(multiply) //5
  .then(multiply) //10
  .then(multiply) //20
  .catch(catchAndPrint) //error , pero tiene un uno de el catch and print return 1
  .then(multiply) //1 pilla el 1 de el catch and print con el return 1
  .then(multiply) //2 , porque esta multiplicando por 2
  .then(print) //4 , porque esta multiplicando por 2
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
Tanto si lo encuentras como sino la conexion tiene que quedar cerrada  so finally
------------------------------------------------------------
*/
const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply", n);
  if (n > 10) throw new Error("Error");
  return n * 2;
};
const print = (n) => console.log(n);

const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => {
  console.log(err);
  return 1;
};
const request = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
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
request("./js/numero.txt") //5
  //request ("./js/numero.txt2") Error al cargar
  .then(print)
  .catch(catchAndPrint)
  .finally(() => console.log("Se acabo la Peticion"));
