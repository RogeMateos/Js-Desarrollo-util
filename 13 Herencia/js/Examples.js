//2

//Definiendo la clase base
 
class Usuario{
 constructor (nombre,email,password) {
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



class Usuario{
  constructor (nombre,email,password) {
   this.nombre = nombre;
   this.email = email;
   this.password = password;
  }
 
 saludo () {
   console.log(`hola soy ${this.nombre}`)
 }
  login(email, password) {
     return this.email === email && this.password === password;
  }
 }





 //3
 //Extendiendo la clase base 
 //va a tener todala clase de el usuario y luego a mayores va a tener una serie de
 //cursos
//En vez de copiar la clase usuario  en la clase alumno (todo el codigo de un lado a otro)
//Vamos a Hereda la clase usuario y vamos a ver como se comporta
//Solo se puede extender una clase
//Con extends hemos copiado todos los metodos de usuario obsea todo el codigo de class usuario dentro de alumno



//Prototype es basicamente donde se almacenan las funciones

class Usuario {
  constructor (nombre,email,password) {
   this.nombre = nombre;
   this.email = email;
   this.password = password;
  }
 
 saludo () {
   console.log(`hola soy ${this.nombre}`)
 }
  login(email, password) {
     return this.email === email && this.password === password;
  }
 }

 class Alumno extends Usuario {

 }

 //Hasta aqui jose y Pabo son practicamente iguales
 const pablo = new Usuario ("Pablo","pablo@email.com","pablo123");
 const Jose = new Alumno ("Jose","Jose@email.com","Jose123");


 //Aqui tendriamos el nombre de la clase uno usuario otro alumno
 console.log(pablo); //Usuario {nombre: 'Pablo', email: 'pablo@email.com', password: 'pablo123'} esto hereda de objeto
 console.log(Jose); //Alumno {nombre: 'Jose', email: 'Jose@email.com', password: 'Jose123'}  Esto hereda de Usuario





//Añadiendo un metodo nuevo

 class Usuario {
  constructor (nombre,email,password) {
   this.nombre = nombre;
   this.email = email;
   this.password = password;
  }
 
 saludo () {
   console.log(`hola soy ${this.nombre}`)
 }
  login(email, password) {
     return this.email === email && this.password === password;
  }
 }

 //Añadiendo metodo
 class Alumno extends Usuario {
  despedida() {
    console.log(`Hasta luego  ${this.nombre}`)
  }
 }


 const pablo = new Usuario ("Pablo","pablo@email.com","pablo123");
 const Jose = new Alumno ("Jose","Jose@email.com","Jose123");



 console.log(pablo); 
 console.log(Jose); 





 //4
 //Super Para el constructor
//Jose necesitara tener una serie d cursos 


//al constructor de la clase que heredamos de la clase padre en este caso Usuario utilizando Super
//Super me permite llamar a cualquier metodo del a clase que hereda 
//Con el super peudo hacer referencia a todo lo qeuquiera de la clase padre



//PADRE
 class Usuario {
  constructor (nombre,email,password) {
   this.nombre = nombre;
   this.email = email;
   this.password = password;
  }
 
 saludo () {
   console.log(`hola soy ${this.nombre}`)
 }
  login(email, password) {
     return this.email === email && this.password === password;
  }
 }

//HIJO
 class Alumno extends Usuario {
  constructor (nombre,email,password) {
    super (nombre,email,password)
    this.cursos = []
   }

  despedida() {
    console.log(`Hasta luego  ${this.nombre}`)
  }
 }


 //const pablo = new Usuario ("Pablo","pablo@email.com","pablo123");
 const Jose = new Alumno ("Jose","Jose@email.com","Jose123");



 //console.log(pablo); 
 console.log(Jose); 










 //Quitamos despedida y ponemos metodo agregar curso
//PADRE
class Usuario {
  constructor (nombre,email,password) {
   this.nombre = nombre;
   this.email = email;
   this.password = password;
  }
 
 saludo () {
   console.log(`hola soy ${this.nombre}`)
 }
  login(email, password) {
     return this.email === email && this.password === password;
  }
 }

//HIJO
 class Alumno extends Usuario {
  constructor (nombre,email,password) {
    super (nombre,email,password)
    this.cursos = []
   }

  agregarcurso(curso) {
    this.cursos.push(curso);
  }
 }


 //const pablo = new Usuario ("Pablo","pablo@email.com","pablo123");
 const Jose = new Alumno ("Jose","Jose@email.com","Jose123");



 //console.log(pablo); 
 console.log(Jose); 




 //5
 //Reescribiendo metodos con Super
 //Puede ser que en algun momento lo que queramos es utilizar , completar un metodo, es decir sobrescribir un metodo

//EL usuario Alumno puede tener cursos , agregar cursos  puede tener una flag de si esta activo , si has activado tu cuenta o no


//Yo quiero que cuando el login se haga solamente se peude hacer login si cumple lo de el usuario y la contraseña , lo que estabamos hacienco antes
//Pero ademas esta activo 

//Si esta activo miro lo de el usuario y contrasenha sino directamente te digo que es false


 class Usuario {
  constructor (nombre,email,password) {
   this.nombre = nombre;
   this.email = email;
   this.password = password;
  }
 
 saludo () {
   console.log(`hola soy ${this.nombre}`)
 }
  login(email, password) {
     return this.email === email && this.password === password;
  }
 }

//HIJO
 class Alumno extends Usuario {
  constructor (nombre,email,password) {
    super (nombre,email,password)
    //Se inicializa en false 
    this.activo = false;
   
   }
  
  activar () {
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
 const Jose = new Alumno ("Jose","Jose@email.com","Jose123");



 //console.log(pablo); 
 console.log(Jose); 









 //6

 //Instance of
 //nos sirve para comparar de que tipo es un objeto




 class Usuario {
  constructor (nombre,email,password) {
   this.nombre = nombre;
   this.email = email;
   this.password = password;
  }
 
 saludo () {
   console.log(`hola soy ${this.nombre}`)
 }
  login(email, password) {
     return this.email === email && this.password === password;
  }
 }

//HIJO
 class Alumno extends Usuario {
  constructor (nombre,email,password) {
    super (nombre,email,password)

    this.activo = false;
   
   }
  
  activar () {
    this.activo = true;
  }
 
  login(email, password) {

 
    if (!this.activo) return false;
    return super.login(email, password);

  }
 }


 const pablo = new Usuario ("Pablo","pablo@email.com","pablo123");
 const Jose = new Alumno ("Jose","Jose@email.com","Jose123");



 console.log(pablo instanceof Usuario); 





