

/*
Ejemplo 1
*/

setTimeout(() => console.log("Timeout"), 3000);





/*
Ejemplo 2
*/


console.log("Desarrollo");

setTimeout(() => console.log("Timeout"), 3000);

console.log("Util");


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