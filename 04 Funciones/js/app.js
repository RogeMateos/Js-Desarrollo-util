const obtenerSaludo = function (nombre) {
  return  ` hola ${nombre}, bienvenido a desarrollo util`;
  };

  
  const imprimirSaludo = function (mensaje) {
     console.log(mensaje);
  };
  


  const saludar = function(obtener,imprimir) {
     const saludo = obtener("Pablo") 
     console.log(saludo);
     imprimir(saludo);
  };
 
saludar (obtenerSaludo,imprimirSaludo);
