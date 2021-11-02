
const error = (msg) => console.log(msg);

const tarea = (tarea, siguiente, error) => {
  console.log(tarea);
  if (Math.random() < 0.1) error();
  setTimeout(siguiente, 500);
};

const pensarIdea = () => tarea("PensarIdea", guionizar,() => error("Error al editar"));

const guionizar = () => tarea("Guionizar", grabar,() => error("Error al editar"));

const grabar = () => tarea("Grabar", editar,() => error("Error al editar"));

const editar = () => tarea("Editar", publicar,() => error("Error al editar"));

const publicar = () =>
  tarea(
    "publicar",
    () => console.log("publicado"),
    () => error("Error al publicar")
  );

  pensarIdea ();
