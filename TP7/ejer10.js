// Escribir una función llamada numeroDeCaracteres que reciba un 
// string y un caracter (un string de un caracter). La función debe devolver el número 
// de veces que aparece el personaje en la cadena.

// escribe tu respuesta acá

function numeroDeCaracteres(palabra) {
    let cuentaDeAes = 0
  
    for (i = 0; i < palabra.length; i++) {
      if(palabra[i] === 'a'){
        cuentaDeAes++
      }
    }
  
    return cuentaDeAes
  }
// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", e)); // 4