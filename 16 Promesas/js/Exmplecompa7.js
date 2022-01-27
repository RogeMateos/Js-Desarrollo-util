/*
ASYNC ---AWAY
*/


/*
------------------------------------------------------------
5
ASYNC & AWAIT
Al tener funciones mucho mas grandes , empezamos a meter then catch al final resulta muy complicado 
de manejarnos.
Para este caso tenemos la sintaxis Aync y await
------------------------------------------------------------
*/



/*
EXAMPLE 01 Codigo sin asycnh anterior Promesa
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

request("./js/numero.txt").then(print).catch(catchAndPrint);



/*
EXAMPLE 02 
Solamanete se puede itilizar Await dentro de una funcion
Estamos esperando a que esta promesa termine
Con el objetivo de hacer estas cosas en secuencial  ver siguiente apartado
*/

const call = async (url) => {
    await request(url).then(print).catch(catchAndPrint);
  };
  
  call("./numero.txt");
  
  
  /*
EXAMPLE 03
Await dentro de una funcion
objetivo de hacer estas cosas en secuencial
almacena en este response  lo que vamos a pasarle a el then(print
es decir en lugar de pasarselo a este then directamente  then(print)
lo que hacemos es almacenarlo Dentro de response.

*/



const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply", n);
  if (n > 10) throw new Error("Error");
  return n * 2;
};
const print = (n) => console.log(n);


const catchAndPrint = (err) => {
  console.log(err);
  return 1;
};

//aqui obtengo  const response = await request(url); 
const request = (url) => {
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


const call = async (url) => {
 //Almacenamos en este response  lo que vamos a pasarle a el then(print
 //Es decir en lugar de pasarselo a este then directamente
//Hacemos print the response, hemos quitado todo eso de el .then . then . then  
  const response = await request(url); 
  //then(print)
  //y podemos hacer un print de response 
  print(response); 
};

call("./js/numero.txt");










/*
EXAMPLE 04
Haciendo otra serie de operaciones
Estomos Encandenando dos promesas
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
        reject(new Error("error al cargar"));
      }
    };

    req.onerror = () => {
      reject(new Error("error de la red"));
    };

    req.send();
  });
};

const call = async (url) => {
  //Aqui podriamos hacer lo de el multiply  otra serie de operaciones asyncrhonas

  const response = await request(url);
  console.log("Resnpondeprimero", response); //5
  const response2 = await request(url);

  const n1 = toNumber(response);

  const n2 = toNumber(response2);

  print(n1 * n2); //25
};

call("./js/numero.txt");








/*
EXAMPLE 05
Catch y finally
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
        reject(new Error("error al cargar"));
      }
    };

    req.onerror = () => {
      reject(new Error("error de la red"));
    };

    req.send();
  });
};
//lo que estamos haciendo aqui es encandenando dos promesas
const call = async (url) => {
  try { //haciendo un try y un catch de toda la vida
    const response = await request(url);
    const response2 = await request(url);

    const n1 = toNumber(response);
    const n2 = toNumber(response2);

    print(n1 * n2);
  } catch (error) {
    catchAndPrint(error);
  }
};

call("./js/numero.txt");



/*
EXAMPLE 06
Haciendo multiples catchs
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
        reject(new Error("error al cargar"));
      }
    };

    req.onerror = () => {
      reject(new Error("error de la red"));
    };

    req.send();
  });
};

const call = async (url) => {
  let response, response2;// Declrar response 


  //Try u catch errors
  try {
    response = await request(url);
    console.log("Resnponseprimero", response);
  } catch (error) {
    catchAndPrint(error);
    response = 7;
  }

  try {
    response2 = await request(url);
  } catch (error) {
    catchAndPrint(error);
    response2 = 8;
  }
  
  const n1 = toNumber(response);
  const n2 = toNumber(response2);
  print(n1 * n2);

  catchAndPrint(error);
};

call("./js/numero.txt");
//call("./js/numero.txt");

/*
07
Con async con await estamos escribiendo promesas de otra manera
Async y await no son cosas distintas de las promesas , son lo mismo


Cuando marcas un metodo como Asycn lo que haces es convertir un metodo en una promesa

const prom = async () =>{}
 
*/


