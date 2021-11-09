
let contador = -5;


do {
  if (contador === 0) {
    contador++;
    continue; 
  }
  console.log("while",10/contador);
  contador++;
} while (contador <= 5);
