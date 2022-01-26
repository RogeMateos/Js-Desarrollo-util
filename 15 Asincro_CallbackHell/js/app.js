
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

  () =>
    tareaPablo("[PABLO] Hace Miniatura",() => simple(" -> revisar la miniatura"),10000),

  () => pesada("grabar el video"),

  () =>
    tareaPablo("[PABLO]  Editar video",()  => simple(" -> Publicar video"), 10),
];

for (const tarea of tareas) tarea();
