/*

*/

/*
    ||    console.log(``);    ` `    ||
*/



/*
------------------------------------------------------------
WHILE
------------------------------------------------------------
*/




/*
------------------------------------------------------------
02

WHILE

Bucle sencillo, es como si fuera un if  en el que su condicion marcara
si el bucle se repite se itera una vez mas o no

Mientas la condificon de ese bucle sea true seguiremos iterando hasta uqe sea false y se produzca lo que llamamos la
condicion de salida


Tenemos que grantitzarnos que pasara de True a false en algun momento 
------------------------------------------------------------
*/


while (){

}


while (true){}//Bucle infinito


//-----------

let contador = 0;

while (contador < 5) {
  contador ++;
  console.log("While",contador)
}



/*
------------------------------------------------------------
02
BREAK

------------------------------------------------------------
*/


let contador = 0;

while (contador < 5) {
  contador ++;
  if (contador === 3) break;
  console.log("While",contador)//1,2
}




let contador = 0;

while (contador < 5) {
  contador ++;

  console.log("While",contador)
  if (contador === 3) break;  //1,2,3
}


//Si contador fuera 7 este bucle nunca se ejecutaria 

let contador = 7;

while (contador < 5) {
  contador ++;

  console.log("While",contador)
  if (contador === 3) break; 
}

/*
------------------------------------------------------------
A veces necesitamos que el contenido ,en este caso el bucle while
se ejecute primero antes de evaluar la condicion 
Caso en el que se inicializa justo en esa llamada y a partir de ahi lo que hacemos es sobre escribir la variable

  if (contador === 7) contador === 0; //Esto nunca va a llega a darse 
  Para ello se invento Do while, ya que esto es un caso muy habitual
------------------------------------------------------------
*/


let contador = 7;

while (contador < 5) {
  if (contador === 7) contador === 0; //Esto nunca va a llega a darse 
  contador ++;

  console.log("While",contador)
  if (contador === 3) break; 
}


/*
------------------------------------------------------------
03
DO WHILE

Ejecutar contenido al menos una vez antes de evaluar la condicion 
Es basicamentelo mismo que el while pero primero ejecutamos y luego evaluamos

------------------------------------------------------------
*/


let contador =7;

do{
  if (contador ===7) contador =0;
  contador++;
  console.log("while",contador);
}while (contador < 5);




/*
------------------------------------------------------------
04
CONTINUE
Queremos continuar el bucle pero esta iteraccion en concreto no queremos que se ejecute


------------------------------------------------------------
*/

//ejemplo dividiendo un numero menos5 hasta 5 y lo que queremos hace es console.log 10  dividido entre contador
//Infinity en consola se refiere cuando el contador vale 0 

let contador = -5;


do {
  console.log("while",10/contador);
  contador++;

} while (contador <= 5);





//saltando la iteracion cuando sea cero , obsea infinity


let contador = -5;


do {
  if (contador === 0)
  continue;  // con esto provocamos otro bucle infinito 

  console.log("while",10/contador);
  contador++;

} while (contador <= 5);





//añadiendo otro contador el contador++

let contador = -5;


do {
  if (contador === 0) {
    contador++;//Tenemos que añadir ++ sino haria bucle infinito , al siempre ser 0 y no incrementar
    continue; 
  }
  console.log("while",10/contador);
  contador++;
} while (contador <= 5);

