

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

const item3 = item2;
item3.precio = 23;

console.log(item3);