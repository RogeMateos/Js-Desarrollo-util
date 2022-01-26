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

console.log("Desarrollo");//se ejecuta primero

setTimeout(() => console.log("Timeout"), 3000);//Se ejecuta tercero

console.log("Util");//se ejecuta segundo



//Siempre tenemos una parte de tiempo que no podemos determinar exactamente

console.time("Prueba");

setTimeout(() => console.timeEnd("Prueba"), 3000);

/*
3 EJEMPLO CON CALLBACKS
Metafora de el oficinista

Oficina y estamos haciendo tareas en nuestro dia a dia
Jose tiene una serie de tareas y para alguna de ellas me necesita a mi 
necesita que resuelva algunas tareas 
Algunas tareas seran simples  las podra resolver jose en un periodo de tiempo muy pequeño

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

  //For para simular que se esta haciendo una tarea
  for (let i = 0; i < 1000000000; i++) {
    Math.random() - Math.random() * Math.random();//le añando un ramdon asi tarda mas
  }
  console.log(`Tarea  ${tarea} terminada`);
};

//Creo function para pablo, con callback 
//Con el callback establezco un settimeout 
//Lo que vamos a hacer es un time out   en el que recibiremos este callback   setTimeout(callback
//y ejecutaremos este tarea, callback, tiempo)  despues de que haya transcurrido este tiempo
const tareaPablo = (tarea, callback, tiempo) => { 
  console.log(tarea);
  setTimeout(callback, tiempo); //Settimeout para este callback que va a tardar un tiempo determinado
};

//Tareas you tube
const tareas = [
  //jose
  () => simple("Escribir Guion"),
  //Tarea Pablo miniatura     //Jose hace tarea simple que es revisar miniatura
  () =>
    tareaPablo(
      "[PABLO] Hace Miniatura",
      () => simple(" -> revisar la miniatura"),2000),

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


//Codigo Limpio sin comentarios mismo que el de arriba
/*
 Recordar la manera de ejecutarse
 hasta que la tarea pesada no se realiza los callbacks no se ejecutan
 simple(" -> revisar la miniatura"),2000),

 Desde que jose graba video hasta que se acaba, pablo ya ha terminado su miniatura , se la ha mandado a jose
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

//1 Escribir guion
//2 PABLO hace miniatura
//3 Empezando tarea Grabar video
//4 Tarea graban video terminada
// 5 PABLO Editar video
// 6 ---> Revisar la miniatura
// 7 ---> Revisar video



//PESADA
// Cambiando tarea PESADA  Pablo miniatura

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
    tareaPablo("[PABLO] Hace Miniatura",() => pesada(" -> revisar la miniatura"), 2000),//Callback revisar miniatura  ahora pesada

  () => pesada("grabar el video"),

  () =>
    tareaPablo(" [PABLO]  Editar video",() => simple(" -> Revisar video"),5000),
];

for (const tarea of tareas) tarea();

//1 Escribir guion
//2 PABLO hace miniatura         ---------- callback esperando pesada
//3 Empezando tarea Grabar video    pesada

//4 Tarea graban video terminada  Pesada
// 5 PABLO Editar video        ---------callback Simple
//aqui hace los callbacks


//callback pesado 
// 6  Empezando tarea -> Revisar la miniatura   

//aqui se para hasta que termina lo que hace el for no empieza la siguiente linea 7 ni 8 revisar video
// 7  Tarea -> revisar la miniatura terminada 
// 8  Revisar video




/*
4 ORDEN DE LLAMADAS

Problema principal con asyncronismo es que no podemos determinar exactamente el instante temporal en el que se van a ejecutar ciertas 
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
Como no podemos garantizarnos el tiempo en el que se vana ejecutar 

IMPORTANTE
tenemos  que garantizarnos si o si que las llamadas qeu sean dependientes una de otra ejecuten de forma consecutiva

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
    tareaPablo("[PABLO] Hace Miniatura",() => simple(" -> revisar la miniatura"),10000),

  () => pesada("grabar el video"),

  () =>
    tareaPablo("[PABLO]  Editar video",()  => simple(" -> Publicar video"), 10),
];

for (const tarea of tareas) tarea();
//1 Escribir guion
//2 PABLO hace miniatura        
//3 Empezando tarea Grabar video  
//4 Tarea graban video terminada  
//5 PABLO Editar video        -
//6 Publicar video  porque tiene ahora 10 
//7 Revisar miniatura porque tiene ahora 1000

/*
05
CALLBACK HELL

El problema de el callback hell lo resuelven las promesas

Ejemplo haciendo las distintas fases de edicion de el video
hacer el guion
Grabar
Editar
publicar

En estas tareas puede ser que de un error , en cada uno de estos momentos
habra que definir un error especifico para cada una de las tareas
  if (Math.random() < 0.1) error();
*/
const error = (msg) => console.log(msg);//funcion error

const tarea = (tarea, siguiente, error) => { //Recibo nombre de tarea , tarea siguiente sera un callback
                                            //Error
  console.log(tarea);
  if (Math.random() < 0.1) error(); //Lo logico aqui seria un throw pro simplifico con una funcion error
  setTimeout(siguiente, 500);//Garantizar que cada una de las tareas reciba la tarea siguiente, pero la tarea siguiente esta compuesta por la mia mas la siguiente
};

//empezamos desde atras , la tarea de publicar el video  seria ejecutar la funcion tarea con publicar.
//Con la funcion siguiente que seria  () => console.log("publicado"), y la funcion de error 
const publicar = () =>
  tarea(
    "publicar",
    () => console.log("publicado"),
    () => error("Error al publicar")
  );

  publicar ();

//Añadiendo otra funcion editar
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

//Añadiendo  Las demas funciones
const error = (msg) => console.log(msg);

const tarea = (tarea, siguiente, error) => {
  console.log(tarea);
  if (Math.random() < 0.1) error();
  setTimeout(siguiente, 500);
};

const pensarIdea = () => tarea("PensarIdea", guionizar,() => error("Error al pensar idea"));

const guionizar = () => tarea("Guionizar", grabar,() => error("Error al Guionizar"));

const grabar = () => tarea("Grabar", editar,() => error("Error al grabar"));

const editar = () => tarea("Editar", publicar,() => error("Error al editar"));// editar, funcion siguiente lo que quiero hacer es publicar

const publicar = () =>
  tarea(
    "publicar",
    () => console.log("publicado"),
    () => error("Error al publicar")
  );
  pensarIdea ();

 /*
 Ahora no lo estoy almacenando en funciones  sino que sustituyo guionizar y lo siguiente
 Como ves este codigo es muy dificil de leer para un humano

Esta funcion tan sencilla es solo pensar idea 
 Callback hell
 Todo este anidamiento se conoce como callback hell, esto funciona pero no de cara a un humano

 para evitar esto tenemos Asyn await
*/

const error = (msg) => console.log(msg);

const tarea = (tarea, siguiente, error) => {
  console.log(tarea);
  if (Math.random() < 0.1) error();
  else setTimeout(siguiente, 500);
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




       
