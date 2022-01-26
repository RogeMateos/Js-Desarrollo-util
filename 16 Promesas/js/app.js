
 const toNumber = (n) => Number(n);
const multiply = (n) => {
  console.log("Multiply", n); //Multiply 5,multiply 10, multiply 20
  if (n > 10) throw new Error("Error");
  return n * 2;
};
const print = (n) => console.log(n);

const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => console.log(err);

const request = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        //Al then le llega este valor
        resolve(req.responseText);
      } else {
        //2
        reject(new Error("error al cargar"));
      }
    };

    req.onerror = () => {
      //3
      reject(new Error("error de la red"));
    };

    req.send();
  });
};
request("./js/numero.txt")
  .then(toNumber)
  .then(multiply)//5
  .then(multiply)//10
  .then(multiply)//20 Aqui lanzamos un error
  .then(multiply)
  .then(print)
  .then(print)
  .catch(catchAndPrint) //Este catch llega se ejecuta pero no funciona como los .then
  .catch(catchAndPrint);
