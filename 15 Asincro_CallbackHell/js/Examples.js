/*
Ejemplo Pizza
*/

console.log(``);

/*
2 SET TIMEOUT

Nos permite establecer un delate para poder ejecutar una tarea 
Esto seria un callback, una funcion que se pasa como parametro a otra funcion  () => console.log("Timeout")
en este caso el setTimeout la ejecuta
*/

setTimeout(() => console.log("Timeout"), 3000);

//Aqui a diferencia de otros lenguajes no vamosa bloquear la ejecucion de codigo mientras estamos
//contando estos 3 mil milisegundos

//Aqui veremos que desarrollo y util se ejecutan consecutivamente y despues viene el timeout

console.log("Desarrollo");

setTimeout(() => console.log("Timeout"), 3000);

console.log("Util");

//Siempre tenemos una parte de tiempo que no podemos determinar exactamente

console.time("Prueba");

setTimeout(() => console.timeEnd("Prueba"), 3000);

/*
3 EJEMPLO CON CALLBACKS
Metafora de el oficinista

Oficina y estamos haciendo tareas en nuestro dia a dia
Jose tiene una serie de tareas y para alguna de ellas me necesita a mi 
necesita que resuelva algunas tareas 
Algunas tareas seran simples  las podra resolver jose en un perido de tiempo muy pequeño

Dentro de jose video me interesa exponer un codigo sincrono que ses simplemente ejecutado en javascript pero
que tambien tarde bastante tiempo , para eso fuerzo un for 
Le mando un metodo math para que calcule cosas y pierda tiempo


Tarea de jose video
Creo funcion que mandaria tarea a Pablo , en este caso necesito saber lo que es la tarea para imprimir la tarea que estoy
haciendo , pero tambien necesito saber que hacer cuando pablo completa la tarea , es cecir necesito un callback
Con este callback establecemos un settimeout en el que recibiremos este callback y ejecutaremos este callback despues
de que haya transcurrido 
El callback sera la respuesta que tiene que dar jose cuando reciba la respuesta de pablo 
Es decir
jose me manda una tarea a mi 
yo termino la tarea y digo jose ya he terminado
Como jose me habia mandado la tarea para algo, a raiz de eso tendra que hacer otra accion,
eso representara este callback




Tareas de You tube
Escrbimos las tareas que nos pueden surgir a traves de you tube
Escribir guion 
Pablo Escribir miniatura en la que tarda dos segundos cuando ya tenemos guion ,Jose hace tarea simple que es revisar miniatura
Jose Grabar video tarea pesada, y en el momento que lo ha terminado de grabar  Pablo lo edita en 5 segundos y jose lo revisa 

Loop For
for (const tarea of tareas) tarea ()
Queremos ejecutar todas estas funciones en orden

*/

//jose
const simple = (tarea) => console.log(tarea);

//tarea de jose video
const pesada = (tarea) => {
  console.log(`Empezando tarea ${tarea} ...`);

  //For para simular que se esta haciendo una tarea, le añando un ramdon asi tarda mas
  for (let i = 0; i < 1000000000; i++) {
    Math.random() - Math.random() * Math.random();
  }
  console.log(`Tarea  ${tarea} terminada`);
};

//Creo function para pablo
const tareaPablo = (tarea, callback, tiempo) => {
  console.log(tarea);
  setTimeout(callback, tiempo);
};

//Tareas you tube
const tareas = [
  //jose
  () => simple("Escribir Guion"),
  //Tarea Pablo miniatura     //Jose hace tarea simple que es revisar miniatura
  () =>
    tareaPablo(
      "[PABLO] Hace Miniatura",
      () => simple(" -> revisar la miniatura"),2000
    ),
  //Jose
  () => pesada("grabar el video"),
  //Tarea Pablo Editar video              /Jose Revisa  tarea video
  () =>
    tareaPablo(
      " [PABLO]  Editar este video",
      () => simple(" -> Revisar video"),
      5000
    ),
];

for (const tarea of tareas) tarea();

//Codigo Limpio sin comentarios

/*
 Recordar la manera de ejecutarse
 hasta que la tarea pesada no se realiza los callbacks no se ejecutan
 simple(" -> revisar la miniatura"),2000),

 Dese que jose graba video hasta que se acaba, pablo ya ha terminado su miniatura , se la ha mandado a jose
 y jose ya la puede revisar, es decir el callback   simple(" -> revisar la miniatura"),2000), ya esta listo para ejecutarse 

 Pero no se ejecuta
 Porque?
 Cuando javascript tiene tareas sincronas a realizar primero realiza todas las tareas sincronas que tenga disponibles
 y despues cuando ya no tiene nada que hacer es cuando mira los callbacks que tiene en la lista 



*/

const simple = (tarea) => console.log(tarea);

const pesada = (tarea) => {
  console.log(`Empezando tarea ${tarea} ...`);

  for (let i = 0; i < 2000000000; i++) {
    Math.random() - Math.random() * Math.random();
  }
  console.log(`Tarea  ${tarea} terminada`);
};

const tareaPablo = (tarea, callback, tiempo) => {
  console.log(tarea);
  setTimeout(callback, tiempo);
};

const tareas = [
  () => simple("Escribir Guion"),

  () =>
    tareaPablo(
      "[PABLO] Hace Miniatura",
      () => simple(" -> revisar la miniatura"),
      2000
    ),

  () => pesada("grabar el video"),

  () =>
    tareaPablo(
      " [PABLO]  Editar este video",
      () => simple(" -> Revisar video"),
      5000
    ),
];

for (const tarea of tareas) tarea();

// Cambiando tarea pesada a Pablo miniatura

const simple = (tarea) => console.log(tarea);

const pesada = (tarea) => {
  console.log(`Empezando tarea ${tarea} ...`);

  for (let i = 0; i < 2000000000; i++) {
    Math.random() - Math.random() * Math.random();
  }
  console.log(`Tarea  ${tarea} terminada`);
};

const tareaPablo = (tarea, callback, tiempo) => {
  console.log(tarea);
  setTimeout(callback, tiempo);
};

const tareas = [
  () => simple("Escribir Guion"),
  //Callback ahora pesada
  () =>
    tareaPablo(
      "[PABLO] Hace Miniatura",
      () => pesada(" -> revisar la miniatura"),
      2000
    ),

  () => pesada("grabar el video"),

  () =>
    tareaPablo(
      " [PABLO]  Editar video",
      () => simple(" -> Revisar video"),
      5000
    ),
];

for (const tarea of tareas) tarea();

/*
4 ORDEN DE LLAMADAS

Problema principal con asyncronismo es que no podemos determinar exactamente el instante temporal en elque se vana ejecutar ciertas 
llamadas



EJemplo

En este ejemplo nos entran las tareas desordenadas



El orden aqui seria
Escribir guion
[pablo] Hace miniatura
Empezando tarea Grabar video
Tarea Graban video terminada
[pablo] Editar video
--> Publicar video   aqui solo tiene 10 milisegundos
--> Revisar miniatura   Tiene 10000


Porque basicamente la que entra primera es la que va a la cola , a la cola le da igual si tu tarea
tiene que depender de otra o no lo que tenga que hacer tendras que encargarte de forzarlo tu de alguna otra manera



Explicacion APi
Una llamada a una api hacer una llamada a una api que tarda 1 segundo y despeus de dos segundos 3 o cinco decides pintar, con la respeusta que te ha llegado de esa api
decides pintar unas tarjetas
Todo esto funciona bien en el 90 por ciento porque despues de cinco segundos esa llamada a la api ya ha terminado

Pero que pasa si nos da un timeout la llamada de la api , si esta colapsada y tarda 7 segundos en responder
Como no podemos garantizarnos el tiempo en el que se vana ejecutar tenemos ue garantizarnos si o si que las llamadas qeu sean dependientes una de otra ejecuten de forma consecutiva


 
*/

const simple = (tarea) => console.log(tarea);

const pesada = (tarea) => {
  console.log(`Empezando tarea ${tarea} ...`);

  for (let i = 0; i < 2000000000; i++) {
    Math.random() - Math.random() * Math.random();
  }
  console.log(`Tarea  ${tarea} terminada`);
};

const tareaPablo = (tarea, callback, tiempo) => {
  console.log(tarea);
  setTimeout(callback, tiempo);
};

const tareas = [
  () => simple("Escribir Guion"),

  () =>
    tareaPablo(
      "[PABLO] Hace Miniatura",
      () => simple(" -> revisar la miniatura"),
      10000
    ),

  () => pesada("grabar el video"),

  () =>
    tareaPablo(
      " [PABLO]  Editar video",
      () => simple(" -> Publicar video"),
      10
    ),
];

for (const tarea of tareas) tarea();

/*
05
CALLBACK HELL

El problema de el callback hell lo resuelven las promesas

Ejemplo hacinedo las distintas fases de edicion de el video
hacer el guion
Grabar
Editar
publicar

En estas tareas pude ser que de un error , en cada uno de estos momentos
habla que definir un error especifico para cada una de las tareas

*/

const error = (msg) => console.log(msg);

const tarea = (tarea, siguiente, error) => {
  console.log(tarea);
  if (Math.random() < 0.1) error();
  setTimeout(siguiente, 500);
};

const publicar = () =>
  tarea(
    "publicar",
    () => console.log("publicado"),
    () => error("Error al publicar")
  );

  publicar ();

//Añadiendo mas funciones

const error = (msg) => console.log(msg);

const tarea = (tarea, siguiente, error) => {
  console.log(tarea);
  if (Math.random() < 0.1) error();
  setTimeout(siguiente, 500);
};


const editar = () => tarea("Editar", publicar,() => error("Error al editar"));

const publicar = () =>
  tarea(
    "publicar",
    () => console.log("publicado"),
    () => error("Error al publicar")
  );

  editar ();


  // Añadiendo aun mas 


const error = (msg) => console.log(msg);

const tarea = (tarea, siguiente, error) => {
  console.log(tarea);
  if (Math.random() < 0.1) error();
  setTimeout(siguiente, 500);
};

const pensarIdea = () => tarea("PensarIdea", guionizar,() => error("Error al pensar idea"));

const guionizar = () => tarea("Guionizar", grabar,() => error("Error al Guionizar"));

const grabar = () => tarea("Grabar", editar,() => error("Error al grabar"));

const editar = () => tarea("Editar", publicar,() => error("Error al editar"));

const publicar = () =>
  tarea(
    "publicar",
    () => console.log("publicado"),
    () => error("Error al publicar")
  );

  pensarIdea ();




 //Ahora no lo estoy almacenando en funciones  sino que sustituyo guionizar y lo siguiente
 //COmo ves este codigo es muy dificil de leer para un humano
 //Callback hell



const error = (msg) => console.log(msg);

const tarea = (tarea, siguiente, error) => {
  console.log(tarea);
  if (Math.random() < 0.1) error();
  setTimeout(siguiente, 500);
};

const pensarIdea = () => 
tarea(
    "PensarIdea",
    ()=> 
    tarea(
        "Guionizar",
        () => 
        tarea(
            "Grabar",
             () => 
             tarea(
                editar,
                () =>
                tarea(
                    "publicar",
                    () => console.log("publicado"),
                    () => error("Error al publicar")
                 ),
                 () => error("Error al editar")
                ),
            () => error("Error al Grabar")
            ),
        () => error("Error al guionizar")
    ),
() => error("Error al pensar idea")
);




       
