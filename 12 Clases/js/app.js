class Curso {
  constructor(titulo, dificultad) {
    this.titulo = titulo;
    this._dificultad = dificultad;
    this.lecciones = [];
  }
  get dificultad() {
    console.log("GETTER");
    return this._dificultad;
  }

  set dificultad(nuevaDificultad) {
    if (nuevaDificultad >= 0 && nuevaDificultad <= 5) {
      this._dificultad = nuevaDificultad;
    } else {
      console.log("no hago nada");
    }
  }

  agregarLeccion(leccion) {
    this.lecciones.push(leccion);
  }

  eliminarUltimeLeccion(leccion) {
    this.lecciones.pop(leccion);
  }
}

const cursoJS = new Curso("javascript", 1);

cursoJS.dificultad = 3;
cursoJS.dificultad = 7;

console.log(cursoJS.dificultad);



