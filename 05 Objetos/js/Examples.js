
/*
dd
*/


/*
    ||    console.log(``);    ` `
*/


/*
------------------------------------------------------------
------------------------------------------------------------
*/



/*
OBJETOS
Cuando queremos agrupar datos en un contenedor para poder tratarlos como uno solo

Ejemplo
Datos personales de una persona, nos interesa que esos datos esten relacionadoscomigo
Para agrupar valores dentro de un mismo contenedor existen los objetos
*/


/*
------------------------------------------------------------
02
CREANDO OBJETOS
------------------------------------------------------------
*/

//Practicamente siempre se declaran con const
const persona = {
    nombre:'Pablo',
    apellidos:'castellanos',
    telefono:22222222,
    edad:26
}



/*
------------------------------------------------------------
------------------------------------------------------------
*/



/*
------------------------------------------------------------
03
ACCESO ATRIBUTOS
------------------------------------------------------------
*/
const persona = {
    nombre:'Pablo',
    apellidos:'castellanos',
    telefono:22222222,
    edad:26
}


console,log(persona["nombre"])
console,log(persona.nombre)//Pablo

//podemos almacenar variable
persona.nombre ='Paolo'

//Las constantes no se pueden reasignar , utilizar el operador =. Lo que reasigne una de de las propiedades
console.log(persona.nombre)//Paolo



/*
------------------------------------------------------------
------------------------------------------------------------
*/



/*
3
OBJETOS DENTRO DE OBJETOS
*/


const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

const item1 = {
    precio:15,
    cantidad:2,
    impuestos:IVA_GENERAL
}

const item2 = {
    precio:25,
    cantidad:3,
    impuestos:IVA_REDUCIDO
}

const factura = {
    //item1:item1,
    //item2:item2
    item1,
    item2
}

console.log(factura);



/*
------------------------------------------------------------
------------------------------------------------------------
*/


/*
4
METODOS Y THIS
Cuando estamos trabajando con objetos y necesitamaos usar THIS, Hacer referencia a los datos de el propio 
Objeto es obligatorio usar Function no la arrow sino la de el ejemplo de abajo

calcularTotal: function  () {
       console.log("THIS",this)
  }


*/



/*
Aqui tenemos un problema responsabilidades de quien es la responsabilidad de calcular el precio total del item1. 
Quien tiene todos los datos de el titem 1?el item1 
Con lo cual seria logico item uno calculara su precio total
*/

const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

const item1 = {
    precio:15,
    cantidad:2,
    impuestos:IVA_GENERAL
}

const item2 = {
    precio:25,
    cantidad:3,
    impuestos:IVA_REDUCIDO
}

const factura = {
    item1,
    // Deberiams de hacer los calculo segun sus items
    item2,
    calcularTotal: () => {
     const total = item1.cantidad * item1.precio * item1.impuestos + item2.cantidad +item2.precio;
     return total
    }
}

console.log(factura.calcularTotal());





//CALCULOS SEGUN SUS ITEMS
//Evaluando los this segun tipo de funcion/Arrow


const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

//Para calcular el total de el item Uno,necesitamos el precio, la cantidad y los impuestos
const item1 = {
    precio:15,
    cantidad:2,
    impuestos:IVA_GENERAL,

    //Este this apunta a windows porque es una funcion Arrow, no apunta a item1
    calcularTotal: () => {
        //this.precio
       console.log("THIS",this)
  }
}
const item2 = {
    precio:25,
    cantidad:3,
    impuestos:IVA_REDUCIDO
}

const factura = {
    item1,
    item2,
    calcularTotal: () => {
     const total1 = item1.calcularTotal();
     return total1
    }
}

console.log(factura.calcularTotal());






//Evaluando los this segun tipo de funcion/ Anonima


const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

const item1 = {
    precio:15,
    cantidad:2,
    impuestos:IVA_GENERAL,

    //Este this apunta a el Objeto item1
    calcularTotal: function  () {
       console.log("THIS",this)
  }
}
const item2 = {
    precio:25,
    cantidad:3,
    impuestos:IVA_REDUCIDO
}

const factura = {
    item1,
    item2,
    calcularTotal: () => {
     const total1 = item1.calcularTotal();
     return total1
    }
}

console.log(factura.calcularTotal());


//Completando ejercicio con Funcion anonima



const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

const item1 = {
    precio:15,
    cantidad:2,
    impuestos:IVA_GENERAL,

    
    calcularTotal: function  () {
       return this.precio * this.cantidad * this.impuestos
  }
}
const item2 = {
    precio:25,
    cantidad:3,
    impuestos:IVA_REDUCIDO
}

const factura = {
    item1,
    item2,
    calcularTotal: () => {
     const total1 = item1.calcularTotal();
     return total1
    }
}

console.log(factura.calcularTotal());






//Completando ejercicio con Funcion anonima y con los dos Items



const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

const item1 = {
    precio:15,
    cantidad:2,
    impuestos:IVA_GENERAL,

    
    calcularTotal: function  () {
       return this.precio * this.cantidad * this.impuestos
  }
}
const item2 = {
    precio:25,
    cantidad:3,
    impuestos:IVA_REDUCIDO,
    calcularTotal: function  () {
      return this.precio * this.cantidad * this.impuestos
 }
}

//En este momento esto funcionaria igual si item1 e item2 estuviera comentado, porque estaria haciendo referencia a los const items1    item2
const factura = {
    //item1,
    //item2,
    calcularTotal: () => {
        return item1.calcularTotal() + item2.calcularTotal()
     
    }
}

console.log(factura.calcularTotal());








//Com,pletando ejercicio cambiando a funcion arrow  y THIS
const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

const item1 = {
    precio:15,
    cantidad:2,
    impuestos:IVA_GENERAL,

    
    calcularTotal: function  () {
       return this.precio * this.cantidad * this.impuestos
  }
}
const item2 = {
    precio:25,
    cantidad:3,
    impuestos:IVA_REDUCIDO,
    calcularTotal: function  () {
      return this.precio * this.cantidad * this.impuestos
 }
}

//En este momento hace referencia a item1 e item 2 de const factura porque es una funcion anonima con THIS
const factura = {
    item1,
    item2,
    calcularTotal: function () {
        return this.item1.calcularTotal() + this.item2.calcularTotal()
     
    }
}

console.log(factura.calcularTotal());





//Completando ejercicio pasando argumento a cont factura metodo
const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

const item1 = {
    precio:15,
    cantidad:2,
    impuestos:IVA_GENERAL,

    
    calcularTotal: function  () {
       return this.precio * this.cantidad * this.impuestos
  }
}
const item2 = {
    precio:25,
    cantidad:3,
    impuestos:IVA_REDUCIDO,
    calcularTotal: function  () {
      return this.precio * this.cantidad * this.impuestos
 }
}

//En este momento hace referencia a item1 e item 2 de const factura porque es una funcion anonima con THIS
const factura = {
    item1,
    item2,
    calcularTotal: function (descuento) {
        return (this.item1.calcularTotal() + this.item2.calcularTotal()) * descuento;
     
    }
}

console.log(factura.calcularTotal(0.8));
