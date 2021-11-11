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
