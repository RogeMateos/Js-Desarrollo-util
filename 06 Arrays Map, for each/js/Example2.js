
//FOR EACH

const miArray = ["uno", "2", "3", "4"];

miArray.forEach((elem, index, array) => {
  console.log(elem, index, array);
});





const miArray = ["uno", "2", "3", "4"];

/*
miArray.forEach((elem,index,array)=> {
 console.log(elem +2 ,index);
})
*/
miArray.forEach((elem, index, array) => {
  console.log(Number(elem) + 2, index);
});





//MAP

let miArray = [1, 2, 3, 4, 5];

miArray = miArray.map((i) => i + 3);

console.log(miArray);



//REDUCE


const facturas = [
    {
      precio: 23,
      cantidad: 1, //A
    },
    {
      precio: 19, //B
      cantidad: 2,
    },
    {
      precio: 14,
      cantidad: 4,
    },
    {
      precio: 22,
      cantidad: 1,
    },
  ];
  

  const total = facturas
    .map((i) => i.precio * i.cantidad)
    .reduce((a, b) => {
      console.log(a, b);
      return a + b;
    });
  
  console.log(total);


  //FILTER


const facturas = [
    {
      precio: 23,
      cantidad: 1, //A
    },
    {
      precio: 19, //B
      cantidad: 2,
    },
    {
      precio: 14,
      cantidad: 4,
    },
    {
      precio: 22,
      cantidad: 1,
    },
  ];
  
  const total = facturas.map((i) => i.precio * i.cantidad).filter((i) => i > 30);
  
  console.log(total);
  