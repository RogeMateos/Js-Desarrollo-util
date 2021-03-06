

//Getters setters
// Quiero Garantizarme que aunque alguien meta la pata esto se siga cumpliendo
//Ejemplo cuando alguien diga que  esto cursoJS.dificultad = 1; es igual a uno , pues que por lo menos este uno
//Sea entre 0-5

//Cuando hacemos un curso  cursoJS.dificultad = 1; no estamos llamando a la propiedad sino que entramos por
// get dificultad() {
//return this.dificultad;
//}

//cuando hacemos un    cursoJS.dificultad = lo que estamos llamando es al setter

//set dificultad(nuevaDificultad) {
  //this.dificultad = nuevaDificultad;
//}


 //Si logeo esto en la consola , el tamaño call stack ha sido excedido, lo que  tendriamos es un bucle infinito 

 //Accedemos a   console.log(cursoJS.dificultad);  y lo que hacemos al accederlo es sobrescribirlo con el getter
 //Entramos a this accedemos al propio objeto punto dificultad. Cuando accedemos a linea 37  y ejecutamos la 38 voivemos a 
 //la 43
 // get dificultad() {
//return this.dificultad;
//}

class Curso {
   
    constructor(titulo,dificultad) {
      this.titulo = titulo;
      this.dificultad = dificultad;
      this.lecciones = []
    }

    //Cuando llamanos a const.dificultad entramos por aqui
    get dificultad() {
      return this.dificultad;
    }
    
    //y cuando hacemos const.difficultad =  llamamos a este setter
    set dificultad(nuevaDificultad) {
      this.dificultad = nuevaDificultad;
    }

    agregarLeccion(leccion) {
     this.lecciones.push(leccion)
    }

    eliminarUltimeLeccion(leccion) {
        this.lecciones.pop(leccion)
       }
  }

  const cursoJS = new  Curso ('javascript');


  //Si logeo esto en la consola , el tamaño call stack ha sido excedido
  //porque arriba en el get difficultad se forma un bucle
  console.log(cursoJS.dificultad); 








//MODIFICANDO COMPORTAMIENTO DE EL CALL STACK DE ARRIBA

//Con getter y setters necesitamos usar _ sino tenemos el error call stack the arriba

//_ esto es una convencion para indicar que la variable this._dificultad = dificultad; del constructor no se debe tratar 
//Directamente, es una especie de indicativo de que esta variable es privada, aunque no existen las variables privadas en js
//Pero es un indicativo 

//Lo que hacemos es es utilizar este this  this._dificultad que esta en el constructor como una especie de variable interna de la clase
//y exponer la propiedad dificultad   y exponerla desde fuera mendiante un getter y setter get dificultad() set dificultad



//Si ejecuto esto tendria uno u lo que estamos es ejecut   ando el getter
class Curso {
   
  constructor(titulo,dificultad) {

    this.titulo = titulo;
    this._dificultad = dificultad;
    this.lecciones = []
  }
  get dificultad() {
    return this._dificultad;
  }

  set dificultad(nuevaDificultad) {
    this._dificultad = nuevaDificultad;
  }

  agregarLeccion(leccion) {
   this.lecciones.push(leccion)
  }

  eliminarUltimeLeccion(leccion) {
      this.lecciones.pop(leccion)
     }
}

const cursoJS = new  Curso ('javascript', 1);



console.log(cursoJS.dificultad); 






//Añadiendole console log getter y setter
//Esto nos daria    GETTER   1
class Curso {
   
  constructor(titulo,dificultad) {

    this.titulo = titulo;
    this._dificultad = dificultad;
    this.lecciones = []
  }
  get dificultad() {
    console.log('GETTER');
    return this._dificultad;
  }

  set dificultad(nuevaDificultad) {
    console.log('SETTER');
    this._dificultad = nuevaDificultad;
  }

  agregarLeccion(leccion) {
   this.lecciones.push(leccion)
  }

  eliminarUltimeLeccion(leccion) {
      this.lecciones.pop(leccion)
     }
}

const cursoJS = new  Curso ('javascript', 1);



console.log(cursoJS.dificultad); 

















// Añadiendo cursoJS.dificultad= 3;
//Resultado ejecutamos primero el SETTER en la linea  cursoJS.dificultad= 3; y despues el GETTER 
//Resultado SETTER GETTER 3
class Curso {
   
  constructor(titulo,dificultad) {

    this.titulo = titulo;
    this._dificultad = dificultad;
    this.lecciones = []
  }
  get dificultad() {
    console.log('GETTER');
    return this._dificultad;
  }

  set dificultad(nuevaDificultad) {
    console.log('SETTER');
    this._dificultad = nuevaDificultad;
  }

  agregarLeccion(leccion) {
   this.lecciones.push(leccion)
  }

  eliminarUltimeLeccion(leccion) {
      this.lecciones.pop(leccion)
     }
}

const cursoJS = new  Curso ('javascript', 1);

//ejecutamos aqui el setter
cursoJS.dificultad= 3;


//ejecutamos aqui el setter
console.log(cursoJS.dificultad); //3









//Estos setters sirven para lanzar errores 
// añadiendo if  


class Curso {
   
  constructor(titulo,dificultad) {

    this.titulo = titulo;
    this._dificultad = dificultad;
    this.lecciones = []
  }
  get dificultad() {
    console.log('GETTER');
    return this._dificultad;
  }

  set dificultad(nuevaDificultad) {
   if (nuevaDificultad >= 0 && nuevaDificultad <= 5){
    this._dificultad = nuevaDificultad;
   }
    else {
      console.log("no hago nada")
    }
  }

  agregarLeccion(leccion) {
   this.lecciones.push(leccion)
  }

  eliminarUltimeLeccion(leccion) {
      this.lecciones.pop(leccion)
     }
}

const cursoJS = new  Curso ('javascript', 1);


cursoJS.dificultad= 3;
cursoJS.dificultad= 7;

console.log(cursoJS.dificultad); 









//el echo de que lo hagamos como arriba no significa qu no podemos acceder a 
//cursoJS._dificultad = 7;
//y cuando imprimimos dificultad va ser igual a 7
//Resultado no hago nada  /  GETTER  / 7 


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

cursoJS._dificultad = 7; //accediendo a barra baja dificultad

console.log(cursoJS.dificultad);//7 es como si redefinieraramos que puede ser entre 1 7 








/*
READ ONLY 
Los setters y los getters podemos omitir uno de los dos 
Convirtiendo la propiedad en read only or write only 

*/








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

  //OMITIENDO SET DIFFITULTAD
  // set dificultad(nuevaDificultad) {
  //   if (nuevaDificultad >= 0 && nuevaDificultad <= 5) {
  //     this._dificultad = nuevaDificultad;
  //   } else {
  //     console.log("no hago nada");
  //   }
  // }

  agregarLeccion(leccion) {
    this.lecciones.push(leccion);
  }

  eliminarUltimeLeccion(leccion) {
    this.lecciones.pop(leccion);
  }
}

const cursoJS = new Curso("javascript", 1);//Cuando asignamos este avalor al principio es el que se va a quedar

cursoJS.dificultad = 3;//porque cuanto intente hacer un set dificultadd igual a 3 , como tiene un get esta propiedad esxiste no da error
//Pero cuando intento hacer un set como set no existe no hace nada se sigue quedando con el uno

cursoJS.dificultad = 7;



console.log(cursoJS.dificultad);//Getter 1 ,  se queda con el uno





//Con esto no evitamos que la asignacion  cursoJS._dificultad = 7; //accediendo a barra baja dificultad
//siga siendo un problema

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

  //OMITIENDO SET DIFFITULTAD
  // set dificultad(nuevaDificultad) {
  //   if (nuevaDificultad >= 0 && nuevaDificultad <= 5) {
  //     this._dificultad = nuevaDificultad;
  //   } else {
  //     console.log("no hago nada");
  //   }
  // }

  agregarLeccion(leccion) {
    this.lecciones.push(leccion);
  }

  eliminarUltimeLeccion(leccion) {
    this.lecciones.pop(leccion);
  }
}

const cursoJS = new Curso("javascript", 1);//Cuando asignamos este avalor al principio es el que se va a quedar

cursoJS.dificultad = 3;//porque cuanto intente hacer un set dificultadd igual a 3 , como tiene un get esta propiedad esxiste no da error
//Pero cuando intento hacer un set como set no existe no hace nada se sigue quedando con el uno

cursoJS.dificultad = 7;

cursoJS._dificultad = 7; //accediendo a barra baja dificultad

console.log(cursoJS.dificultad);//Getter 7 ,  reasignado entre 1 7

