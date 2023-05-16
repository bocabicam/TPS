// Escribir una función llamada numeroDeAes que recibe una cadena y 
// devolver el número de veces que aparece la letra "a":

// escribe tu respuesta acá


function  numeroDeAes ( palabra ) {
    let  contar =  0 ;
    for ( let  i  =  0 ;  i  <  palabra.length ;  i ++ ) {
      if ( palabra [ i ]  ===  'a' ) {
        contar ++ ;
      }
    }
    return  contar ;
  }



// código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0












