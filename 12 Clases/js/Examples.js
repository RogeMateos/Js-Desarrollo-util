
//1
//Definiendo clases/Constructor
//Buena practica todos los atributos se inicialicen en el constructor

class Curso{
    constructor(titulo,dificultad) {
      this.titulo = titulo;
      this.dificultad = dificultad;
      this.lecciones = []
    }
  }


//2
  //Definiendo metodos
  class Curso{
    constructor(titulo,dificultad) {
      this.titulo = titulo;
      this.dificultad = dificultad;
      this.lecciones = []
    }
    agregarLeccion(leccion) {
     this.lecciones.push(leccion)
    }
    eliminarUltimaLeccion(leccion) {
        this.lecciones.pop(leccion)
       }
  }

   //3
   //Creando Objeto curso
   //Instanciando clase
   class Curso{
    constructor(titulo,dificultad) {
      this.titulo = titulo;
      this.dificultad = dificultad;
      this.lecciones = []
    }
    agregarLeccion(leccion) {
     this.lecciones.push(leccion)
    }
    eliminarUltimaLeccion(leccion) {
        this.lecciones.pop(leccion)
       }
  }

  //New curso invoca al constructor de la clase
  const cursoJS = new  Curso ('javascript',1)

  const cursoCSS = new  Curso ('css',4)

  console.log(cursoJS,cursoCSS); 






 //4
  //Invocando metodos
  class Curso{
    constructor(titulo,dificultad) {
      this.titulo = titulo;
      this.dificultad = dificultad;
      this.lecciones = []
    }
    agregarLeccion(leccion) {
     this.lecciones.push(leccion)
    }
    eliminarUltimaLeccion(leccion) {
        this.lecciones.pop(leccion)
       }
  }

  const cursoJS = new  Curso ('javascript',1);

  const cursoCSS = new  Curso ('css',4);

  cursoJS.agregarLeccion('into a Js');
  cursoJS.agregarLeccion('Variables');
  cursoJS.agregarLeccion('Tipos de datos');

  console.log(cursoJS,cursoCSS); 





   //5
  //Curiosidades de el constructor
  //En el constructor viene a ser lo que se ejecuta
  // y aqui vemos que le ejecutamos el console log de constructor cuando invocamos a la funcion
  //Esto se ejecuta cada vez que invocamos a la funcion y es por esta razon que solo puede haber un constructor
  //Una clase solo puede tener un constructor


 




  //6
  //Manipulando Atributos

  //Hemos creado nuestro curso con dificultad undefined
  //Si manipulamos    cursoJS.dificultad = 1; estariamos consiguiendo lo mismo, que pasando el 1
  //cuando invocamos funcion

  class Curso{
   
    constructor(titulo,dificultad) {
      this.titulo = titulo;
      this.dificultad = dificultad;
      this.lecciones = []
    }
    agregarLeccion(leccion) {
     this.lecciones.push(leccion)
    }
    eliminarLeccion(leccion) {
        this.lecciones.pop(leccion)
       }
  }

  const cursoJS = new  Curso ('javascript');// Dificultad undefined no le estamos pasando 1

  cursoJS.dificultad = 1;//Aqui seria lo mismo que pasar el parametro arriba pero en este caso accediendo a dificultad
  console.log(cursoJS); 






  //Cosas malas de javascript si you hago malas practicas
  //Asi modificamos los atributos y metodos y nada nos lo impide
  //Esto no se puede hacer, deberiamos ponernos unos limites

  class Curso{
     
      constructor(titulo,dificultad) {
        this.titulo = titulo;
        this.dificultad = dificultad;
        this.lecciones = []
      }
      agregarLeccion(leccion) {
       this.lecciones.push(leccion)
      }
      eliminarUltimeLeccion(leccion) {
          this.lecciones.pop(leccion)
         }
    }
  
    const cursoJS = new  Curso ('javascript');
  
    cursoJS.dificultad = 1;
    
    //Ni se inventan atributos que no existan
    cursoJS.loquemedelagana = "loquesea"
    
    //Ni se modifican los metodos, esto es una mala practica, lo veremos con Herencia
    cursoJS.eliminarUltimeLeccion = () => console.log ("no hago nada");
    
    cursoJS.eliminarUltimeLeccion ();
  
    console.log(cursoJS); 


    


    //En 