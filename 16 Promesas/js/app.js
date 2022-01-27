
const toNumber = (n) => Number(n);
const multiply = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  let number = toNumber(n);
  number = multiply(number);
  print(number);
};

const catchAndPrint = (err) => console.log(err);


const request = (url, catchFn, then) => {
    //PROMESA
  return new Promise((resolve, reject) => {
    //Promesa que tiene que devolver una funcion,
    //Reject es el caso en que esta promesa resuelve el error
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        then(req.responseText); //eL resolve seria en  el then
      } else {
        catchFn(new Error("error al cargar")); //aplicaremos en los catch los rejects
      }
    };
    req.onerror = () => {
      catchFn(new Error("error de la red"));
    };

    req.send();
  });
};
request("./js/numero.txt", catchAndPrint,thenFn);