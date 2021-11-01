/*

*/



/*
2 SET TIMEOUT

Nos permite establece un delate para poder ejecutar una tarea 
Esto seria un callback, una funcion que se para como parametro a otra funcion  () => console.log("Timeout")
en este caso el setTimeout la ejecuta
*/


setTimeout (() => console.log("Timeout"),3000);


//Aqui a diferencia de otros lenguajes no vamosa bloquear la ejecucion de codigo mientras estamos 
//contando estos 3 mil milisegundos 

//Aqui veremos qeu desarrollo y util se ejecutan consecutivamente y despues viene el timeout


console.log("Desarrollo");

setTimeout (() => console.log("Timeout"),3000);

console.log("Util");


//Siempre tenemos una parte de tiempo que no podemos determinar exactamente

console.time("Prueba");

setTimeout(() => comnsole.timeEnd("Prueba", 3000));




