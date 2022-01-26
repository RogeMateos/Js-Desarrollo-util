/*

*/

/*
    ||    console.log(``);    ` `    ||
*/

/*
------------------------------------------------------------
------------------------------------------------------------
*/


/*
------------------------------------------------------------
02

IF ELSE


------------------------------------------------------------
*/

const numero = 0;

if (numero == 0) {
console.log("cero");
}





const numero = 0;

if (numero == 0) {
console.log("cero");
}else{
    console.log("No es cero");  
}


    

const numero = 0;

if (numero == 0) {
console.log("cero");
} else if (numero === 1){ //Podemos poner tantos selfs ifs como queramos   
 console.log("uno");
} else {
    console.log("No es cero ni uno");  
}


 /*
------------------------------------------------------------
03

THRUTHY FALSY

1FALSY

O
""
false
null
undefined


2TRUTHY

function() {}

const valor = []   Array vacio es truthy 

const valor = {} Objeto   es truthy
 
------------------------------------------------------
*/


const valor = 4;

if (valor) console.log("Truthy");
else console.log("Falsy")



// cuando queremos saber si un array esta vacio o no utilizamos length
//Si es cero cero es falsy dentro de los numeros

const valor = [].length;//false because it is 0 o legnth

if (valor) console.log("Truthy");
else console.log("Falsy")
