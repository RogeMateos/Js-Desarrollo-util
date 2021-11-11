class Curso{
     
  constructor(titulo,dificultad) {
    this.titulo = titulo;
    this.dificultad = dificultad;
    this.lecciones = []
  }
static BASE_URL = "desarrolloutil.com/cursos/";

static saludar(){
  console.log("Saludo");
}

  agregarLeccion(leccion) {
   this.lecciones.push(leccion)
  }


  eliminarUltimeLeccion(leccion) {
      this.lecciones.pop(leccion)
     }
}

//const cursoJS = new  Curso ('javascript',1);

Curso.saludar();
console.log(Curso.BASE_URL); 

