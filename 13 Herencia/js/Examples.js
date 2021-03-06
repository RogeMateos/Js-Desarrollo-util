//2

//Definiendo la clase base

class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) return true;
    else return false;
  }
}

//Esto seria lo mismo que
//Ya que esto es un boleano en si mismo if (this.email === email && this.password === password)
//y estamos retornando el propio booleano

class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  saludo() {
    console.log(`hola soy ${this.nombre}`);
  }
  login(email, password) {
    return this.email === email && this.password === password;
  }
}

//3
//Extendiendo la clase base
//va a tener todala clase de el usuario y luego a mayores va a tener una serie de cursos
//En vez de copiar la clase usuario  en la clase alumno (todo el codigo de un lado a otro)
//Vamos a Heredar la clase usuario y vamos a ver como se comporta
//Solo se puede extender una clase
//Con extends hemos copiado todos los metodos de usuario obsea todo el codigo de class usuario dentro de alumno

//Prototype (en la consola cuando vemos)es basicamente donde se almacenan las funciones

class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  saludo() {
    console.log(`hola soy ${this.nombre}`);
  }
  login(email, password) {
    return this.email === email && this.password === password;
  }
}

//No veriamos el constructor en la consola, pero todas las clases tienen que tener un constructor
class Alumno extends Usuario {}

//Hasta aqui jose y Pabo son practicamente iguales
const pablo = new Usuario("Pablo", "pablo@email.com", "pablo123");
const Jose = new Alumno("Jose", "Jose@email.com", "Jose123");

//Aqui tendriamos el nombre de la clase uno usuario otro alumno
console.log(pablo); //Usuario {nombre: 'Pablo', email: 'pablo@email.com', password: 'pablo123'} esto hereda de objeto
console.log(Jose); //Alumno {nombre: 'Jose', email: 'Jose@email.com', password: 'Jose123'}  Esto hereda de Usuario




//A??adiendo un metodo nuevo
class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre; 
    this.email = email;
    this.password = password;
  }

  saludo() {
    console.log(`hola soy ${this.nombre}`);
  }
  login(email, password) {
    return this.email === email && this.password === password;
  }
}

//A??adiendo metodo
class Alumno extends Usuario {
  despedida() {
    console.log(`Hasta luego  ${this.nombre}`);
  }
}

const pablo = new Usuario("Pablo", "pablo@email.com", "pablo123");
const Jose = new Alumno("Jose", "Jose@email.com", "Jose123");

console.log(pablo);
console.log(Jose);

//4
//Super Para el constructor
//Escribimos un constructor para Jose
//Jose necesitara tener una serie de cursos  this.cursos = []

//al constructor de la clase que heredamos de la clase padre en este caso Usuario se le llama  utilizando Palabra clave Super
//Super me permite llamar a cualquier metodo de la clase que herede
//Con el super puedo hacer referencia a todo lo que quiera de la clase padre

//PADRE
class Usuario {
  constructor(nombre, email, password) {
    console.log("Constructor de Usuario")//Al crearlo se ejecuta el constructor de usuario
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  saludo() {
    console.log(`hola soy ${this.nombre}`);
  }
  login(email, password) {
    return this.email === email && this.password === password;
  }
}

//HIJO
class Alumno extends Usuario {
  constructor(nombre, email, password) {
    //Constructor para jose,con este super puedo hacer referencia a todo lo que quiera de la clase padre
    super(nombre, email, password);
    this.cursos = [];
  }

  despedida() {
    console.log(`Hasta luego  ${this.nombre}`);
  }
}

//const pablo = new Usuario ("Pablo","pablo@email.com","pablo123");
const Jose = new Alumno("Jose", "Jose@email.com", "Jose123");

//console.log(pablo);
console.log(Jose);






  
//Quitamos despedida y ponemos metodo agregar curso
//PADRE
class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  saludo() {
    console.log(`hola soy ${this.nombre}`);
  }
  login(email, password) {
    return this.email === email && this.password === password;
  }
}

//HIJO
//En constructor y agregarcurso en consola pondria que es Prototypo de usuario pero en realidad es de Alumno
class Alumno extends Usuario {
  constructor(nombre, email, password) {
    super(nombre, email, password);
    this.cursos = [];
  }

  agregarcurso(curso) {
    this.cursos.push(curso);
  }
}

//const pablo = new Usuario ("Pablo","pablo@email.com","pablo123");
const Jose = new Alumno("Jose", "Jose@email.com", "Jose123");

//console.log(pablo);
console.log(Jose);






//5
//Reescribiendo metodos con Super
//Puede ser que en algun momento lo que queramos es utilizar , completar un metodo, es decir sobrescribir un metodo

//EL usuario Alumno puede tener cursos , agregar cursos  puede tener una flag de si esta activo , si has activado tu cuenta o no

//Yo quiero que cuando el login se haga solamente se puede hacer login si cumple lo de el usuario y la contrase??a , lo que estabamos hacienco antes
//Pero ademas esta activo

//Si esta activo miro lo de el usuario y contrasenha sino directamente te digo que es false

class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  saludo() {
    console.log(`hola soy ${this.nombre}`);
  }
  login(email, password) {
    return this.email === email && this.password === password;
  }
}

//HIJO
class Alumno extends Usuario {
  constructor(nombre, email, password) {
    super(nombre, email, password);
    //Se inicializa en false
    this.activo = false;
  }

  activar() {
    this.activo = true;
  }
  //aqui estoy sobreescribiendo sigo manteniendo los mismos parametros
  login(email, password) {
    //if (this.activo) return super.login(email,password);
    //return false;
    if (!this.activo) return false;
    return super.login(email, password);
  }
}

//const pablo = new Usuario ("Pablo","pablo@email.com","pablo123");
const Jose = new Alumno("Jose", "Jose@email.com", "Jose123");

//console.log(pablo);
console.log(Jose);

//6

//Instance of
//nos sirve para comparar de que tipo es un objeto

class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  saludo() {
    console.log(`hola soy ${this.nombre}`);
  }
  login(email, password) {
    return this.email === email && this.password === password;
  }
}

//HIJO

class Alumno extends Usuario {
  constructor(nombre, email, password) {
    super(nombre, email, password);

    this.activo = false;
  }

  activar() {
    this.activo = true;
  }

  login(email, password) {
    if (!this.activo) return false;
    return super.login(email, password);
  }
}

const pablo = new Usuario("Pablo", "pablo@email.com", "pablo123");
const Jose = new Alumno("Jose", "Jose@email.com", "Jose123");

console.log(pablo instanceof Usuario); //True

console.log(Jose instanceof Alumno); //True

console.log(pablo instanceof Alumno); //False

console.log(Jose instanceof Usuario); //True   //Jose es instance de usuario Alumno y objeto

//Pero jose era un alumno
//Pero instance of internamente

console.log(Jose); // En consola Tendriamos  Alumno- que no es instancia de usuario- bajamos 
//hasta al proptotype que dice que es un usuario , va bajando en cascada hasta que llega al final , 
//en lo que solo nos queda object
console.log(Jose instanceof object); //True

console.log([] instanceof object); //True es un objeto vacio instancia de Object

//Todos los objetos son instancia de object
