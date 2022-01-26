
/*

*/

/*
    ||    console.log(``);    ` `    ||
*/

/*
------------------------------------------------------------
CLASES
------------------------------------------------------------
*/

/*
------------------------------------------------------------

06 STATICOS

Las clases pueden tener atributos y metodos estaticos , pero que hacen referencia es que son de la propia clase, no son de ningun
Objeto en cuestion sino que son de la propia clase

Atributos y metodos de la propia clase

Ejemplo Molde Tarta
Si tenemos un molde que hace tarta, podremos frabricar tartas de diferentes sabores , cada uno tendra sus atributos, sus metodos 
Pero Hay metodos que vienen directamente puestos para el molde
Ejemlo Limpiar molde seria un metodo no de las tartas sino de el molde

Ejempplo cursos
Hay una serie de metodos que normalmente estan relacionados con estos cursos pero que no son de un curso en concreto sino que son para 
cualquier curso.

Por ejemplo podriamos hacer un metodo para calcular una Url
La url base para todos los cursos 


La base url estatica no aparece en consola cuando hacemos console.log(cursoJS)
------------------------------------------------------------
*/






class Curso{
     
  constructor(titulo,dificultad) {
    this.titulo = titulo;
    this.dificultad = dificultad;
    this.lecciones = []
  }
static BASE_URL = "desarrolloutil.com/cursos/";

  agregarLeccion(leccion) {
   this.lecciones.push(leccion)
  }


  eliminarUltimeLeccion(leccion) {
      this.lecciones.pop(leccion)
     }
}

const cursoJS = new  Curso ('javascript',1);

console.log(cursoJS); //La base url estatica no aparece en consola cuando hacemos console.log(cursoJS)




//Esta url esta en la clase curso

class Curso{
     
  constructor(titulo,dificultad) {
    this.titulo = titulo;
    this.dificultad = dificultad;
    this.lecciones = []
  }
static BASE_URL = "desarrolloutil.com/cursos/";

  agregarLeccion(leccion) {
   this.lecciones.push(leccion)
  }


  eliminarUltimeLeccion(leccion) {
      this.lecciones.pop(leccion)
     }
}

const cursoJS = new  Curso ('javascript',1);

console.log(Curso.BASE_URL); //la Url esta directamente en la clase curso , estamos haciendo referencia cuando digo curso a las 
                            //clase curso , no al Objeto





//Anadiendo metodo , pues puedo  tener propiedades y metodos



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









/*
Ejempllo basico 
Date,now()
Por ejemplo Date.now() para calcular el momento actual, ponemos eso en la consola, no necesito crear una fecha necesito
en que momento estoy ahora
Aqui estoy haciendo referencia a la clase fecha

New date()
Pero si quiero crear una fecha con el dia de hoy tengo que hacer un  new Date() y en este momento creo este new date
Aqui tengo instanciado un objeto fecha
*/



