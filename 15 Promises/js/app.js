
//jose
const simple = (tarea) => console.log(tarea);

//tarea de jose video
const pesada = (tarea) => {
    console.log(`Empezando la tarea ${tarea} ...`);
     
    for (let i = 0; i<1000000000; i++) {
      Math.random()  - Math.random() * Math.random(); 
    }
    console.log(`Tarea  ${tarea} terminada`);
}

//Creo function para pablo
const tareaPablo = (tarea,callback, tiempo) => {
    console.log(tarea);
 setTimeout(callback,tiempo);
}


//Tareas you tube
const tareas = [
    //jose
    () => simple("Escribir Guion"),
    //Tarea Pablo miniatura     //Jose hace tarea simple que es revisar miniatura
    () => tareaPablo ("Haceniniatura", ()=> simple("revisar la miniatura"),2000),
    //Jose
    () => pesada ("grabar el video"),
    //Tarea Pablo Editar video              /Jose Revisa  tarea video 
    () => tareaPablo ("Editar este video", () =>  simple("Revisar video"),5000 )

]

for (const tarea of tareas) tarea ()