
/*
Ejemplo 1
*/

setTimeout(() => console.log("Timeout"), 3000);

/*
Ejemplo 2
*/

console.log("Desarrollo");// primero, parte sincrona

setTimeout(() => console.log("Timeout"), 3000);//Tercero,solo cuando hemos acbadode ejecutar la parte sincrona viene la Asincrona

console.log("Util");///segundo,parte sincrona

/*
Ejemplo 3
*/

console.log("Desarrollo");

setTimeout(() => console.log("Timeout"), 3000);

console.log("Util");

console.time("Prueba");

setTimeout(() => console.timeEnd("Prueba"), 3000);

/*
Ejemplo 4
*/

//jose
const simple = (tarea) => console.log(tarea);

//tarea de jose video
const pesada = (tarea) => {
  console.log(`Empezando tarea ${tarea} ...`);

  //For para simular que se esta haciendo una tarea
  for (let i = 0; i < 1000000000; i++) {
    Math.random() - Math.random() * Math.random();//le añando un ramdon asi tarda mas
  }
  console.log(`Tarea  ${tarea} terminada`);
};

//Creo function para pablo, con tarea,callback,tiempo 
//En este caso necesito saber cual es la tarea , para imprimir la tarea que estoy haciendo.
//Pero tambien necesito saber que hacer cuando Pablo termnina la tarea, es decir necesito un callback
//Con el callback establezco un settimeout que va a tardar un tiempo determinado 
//Lo que vamos a hacer es un time out   en el que recibiremos este callback   setTimeout(callback
//y ejecutaremos este tarea, callback, tiempo)  despues de que haya transcurrido este tiempo
//Este callback sera la respuesta que tiene que dar jose cuando reciba, la respuesta de Pablo

//jose me manda una tarea a mi 
//yo termino la tarea y digo jose ya he terminado
//Como jose me habia mandado la tarea para algo, a raiz de eso tendra que hacer otra accion,
//eso representara este callback

const tareaPablo = (tarea, callback, tiempo) => { 
  console.log(tarea);
  setTimeout(callback, tiempo); //Settimeout para este callback que va a tardar un tiempo determinado
};


//Tareas you tube
const tareas = [
  //jose
  () => simple("Escribir Guion"),
  //Tarea Pablo miniatura     //jose hace tarea simple que es revisar miniatura
  () =>
    tareaPablo(
      "[PABLO] Hace Miniatura",() => simple(" -> revisar la miniatura"),2000),//Tarea para pablo,callback para joserevisar miniatura,tiempo para pablo en tarea miniatura
      
  //Jose Graba video
  () => pesada("grabar el video"),
  //Tarea Pablo Editar video              /Jose Revisa  tarea video
  () =>
  //Tarea Pablo edita video,Callback jose revisa video,Tiempo pablo tarda en ditar video
    tareaPablo(
      " [PABLO]  Editar este video",() => simple(" -> Revisar video"),5000),
];

//ejecutamos funciones en orden
for (const tarea of tareas) tarea();

//Core de esto es cuando javascript tiene tareas sincronas a realizar primero realiza todas las tareas sincronas
//y despues es cuando mira los callbacks que tiene en la lista

//1 Escribir guion
//2 PANLO hace miniatura
//3 Empezando tarea Grabar video
//4 Tarea graban video terminada
// 5 PABLO Editar video
// 6 ---> Revisar la miniatura
// 7 ---> Revisar video


/*
Ejemplo 4.1
*/

const simple = (tarea) => console.log(tarea);

const pesada = (tarea) => {
  console.log(`Empezando tarea ${tarea} ...`);

  for (let i = 0; i < 2000000000; i++) {
    Math.random() - Math.random() * Math.random();
  }
  console.log(`Tarea  ${tarea} terminada`);
};

const tareaPablo = (tarea, callback, tiempo) => {
  console.log(tarea);
  setTimeout(callback, tiempo);
};

const tareas = [
  () => simple("Escribir Guion"),
   //Este callback ya estaria listo, pero como tenemos tarea pesada despues,tarda.Primero se realizan t
   //Todas  las tareas sincronas, y despues los callbacks que tiene en la lista
  () => tareaPablo("[PABLO] Hace Miniatura",() => simple(" -> revisar la miniatura"),2000),

  () => pesada("grabar el video"),

  () =>tareaPablo("[PABLO]  Editar este video",() => simple(" -> Revisar video"),5000),
];

for (const tarea of tareas) tarea();

//1 Escribir guion
//2 PABLO hace miniatura
//3 Empezando tarea Grabar video
//4 Tarea graban video terminada
// 5 PABLO Editar video
// 6 ---> Revisar la miniatura
// 7 ---> Revisar video



/*
Ejemplo 5 
*/
const simple = (tarea) => console.log(tarea);

const pesada = (tarea) => {
  console.log(`Empezando tarea ${tarea} ...`);

  for (let i = 0; i < 2000000000; i++) {
    Math.random() - Math.random() * Math.random();
  }
  console.log(`Tarea  ${tarea} terminada`);
};

const tareaPablo = (tarea, callback, tiempo) => {
  console.log(tarea);
  setTimeout(callback, tiempo);
};

const tareas = [
  () => simple("Escribir Guion"),
  
  () => tareaPablo("[PABLO] Hace Miniatura",() => pesada(" -> revisar la miniatura"),2000),

  () => pesada("grabar el video"),

  () =>tareaPablo("[PABLO]  Editar este video",() => simple(" -> Revisar video"),5000),
];

for (const tarea of tareas) tarea();

//1 Escribir guion
//2 PABLO hace miniatura         ---------- callback esperando pesada
//3 Empezando tarea Grabar video    pesada

//4 Tarea graban video terminada  Pesada
// 5 PABLO Editar video        ---------callback Simple
//aqui hace los callbacks


//callback pesado 
// 6  Empezando tarea -> Revisar la miniatura   

//aqui se para hasta que termina lo que hace el for no empieza la siguiente linea 7 ni 8 revisar video
// 7  Tarea -> revisar la miniatura terminada 
// 8  Revisar video
