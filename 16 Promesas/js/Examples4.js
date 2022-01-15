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
5
ASYNC & AWAIT
Al tener funciones mucho mas grandes , empezamos a meter then catch al final resulta muy complicado 
de manejarnos.
Para este caso tenemos la sintaxis Aync y await
 
 

------------------------------------------------------------
*/


/*
01 Codigo sin asycnh
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

request ("./js/numero.txt") 

 .then(print)
 .catch(catchAndPrint)






 /*
02
 Modificando codigo con Asynch
  1 Solo se puede utilizar await dentro de una funcion

  Con este await estamos esperando a que  esta promesa termine  con el objetivo de hacer estas
  cosas en secuencial

 
 
  const call = async (url)  =>{
  await request (url) 

  .then(print)
  .catch(catchAndPrint)
}

call('./numero.txt')



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
              
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
        
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};

//1 Await dentro de una funcion
const call = async (url)  =>{
  await request (url) 

  .then(print)
  .catch(catchAndPrint)
}

call('./numero.txt')





 /*
03
Podemos decir 

 //almacena en este response  lo que vamos a pasarle a el then(print
  //es decir en lugar de pasarselo a este then directamente lo que hacemos es almacenarlo
  //Dentro de response 

//Y hemos quitado de un plumazo el asynchronismo, 



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
              
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
        
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};

 //1 Await dentro de una funcion
 const call = async (url)  =>{
  //almacena en este response  lo que vamos a pasarle a el then(print
  //es decir en lugar de pasarselo a este then directamente lo que hacemos es almacenarlo
  //Dentro de response 

  //Aqui podriamos hacer lo de el multiply  otra serie de operaciones asyncrhonas

  const response = await request (url) ;
   print(response);
}

call('./js/numero.txt')








 /*
04
Haciendo otra serie de operaciones
Estomos Encandenando dos promesas


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
              
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
        
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};


 const call = async (url)  =>{

  //Aqui podriamos hacer lo de el multiply  otra serie de operaciones asyncrhonas
  

  const response = await request (url);
  console.log("Resnponseprimero",response)//5
  const response2 = await request (url);

   const n1 =toNumber (response);

   const n2 =toNumber (response2);

   print(n1 *n2);//25 
}

call('./js/numero.txt')







 /*
04
Catch y finally


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
              
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
        
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};


 const call = async (url)  =>{



   try  {
    const response = await request (url);
    console.log("Resnponseprimero",response)
    const response2 = await request (url);
  
     const n1 =toNumber (response);
  
     const n2 =toNumber (response2);
  
     print(n1 *n2);
   } catch (error){
     catchAndPrint(error);
   }

};

call('./js/numero.txt');







 /*
05
Haciendo multiples catchs
 


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
              
              reject(new Error("error al cargar"));
              
            }
          
          }
          
          req.onerror = () => {
        
            reject(new Error("error de la red"));
           
          };
          
          req.send();

    } )  
};


 const call = async (url)  =>{

let response,response2;

   try  {
     response = await request (url);
    console.log("Resnponseprimero",response)
  } catch (error){
   catchAndPrint (error);
  }

  try {
     response2 = await request (url);
  } catch (error){
    catchAndPrint (error);
   }
     const n1 =toNumber (response);
  
     const n2 =toNumber (response2);
  
     print(n1 *n2);

     catchAndPrint(error);
 

};

call('./js/numero.txt');





 /*
07
Con assign con await estamos escribiendo promesas de otra manera
Async y await no son cosas distintas de las promesas , son lo mismo


Cuando marcas un metodo como Asycn lo que haces es convertir un metodo en una promesa

const prom = async () =>{}
 
*/


