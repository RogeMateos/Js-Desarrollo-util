/*

*/

/*
    ||    console.log(``);    ` `    ||
*/



/*
------------------------------------------------------------
SWITCH CASE
------------------------------------------------------------
*/




/*
------------------------------------------------------------
01
iNTRODUCCION
Estructura de control que sustituye a if else cuando es muy grande if else

Tiene bajo rendimiento
El break no sienta nada bien a javascript
------------------------------------------------------------
*/


switch  () {

}



//Describimos casos posibles que nos interesa comtemplar

const numero = 0;

switch  (numero) {
  case 0:
    console.log('cero');
  case 1:
    console.log('Uno');
  case 2:
    console.log('Dos');
  case 3:
    console.log('Tres');
    default:
        console.log("Otro numetro")
}




//Adding breaks


const numero = 0;

switch  (numero) {
  case 0:
    console.log('cero');
    break;
  case 1:
    console.log('Uno');
    break;
  case 2:
    console.log('Dos');
    break;
  case 3:
    console.log('Tres');
    break;
    default:
        console.log("Otro numetro")
}

//Ejemplo  sin un break

const numero = 0;

switch  (numero) {
  case 0:
    console.log('cero');
    break;
  case 1:
    console.log('Uno');
    break;
  case 2:
    console.log('Dos');
    //break;
  case 3:
    console.log('Tres');
    break;
    default:
        console.log("Otro numetro")
}
//Dos tres
//Agrupando cases


const numero = 0;

switch  (numero) {
  case 0:
  case 1:
  case 2:
    console.log('Dos');
    break;
  case 3:
    console.log('Tres');
    break;
    default:
        console.log("Otro numetro")
}
