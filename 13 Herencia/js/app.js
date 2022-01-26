
//Añadiendo un metodo nuevo
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

//Añadiendo metodo
class Alumno extends Usuario {
  despedida() {
    console.log(`Hasta luego  ${this.nombre}`);
  }
}

const pablo = new Usuario("Pablo", "pablo@email.com", "pablo123");
const Jose = new Alumno("Jose", "Jose@email.com", "Jose123");

console.log(pablo);
console.log(Jose);