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