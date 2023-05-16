
// Escribir una función llamada contrasenaValidaque reciba una cadena y retorne true 
// si la cadena es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe devolver false.

// escribe tu respuesta acá
function  contrasenaValida ( contrasena ){
    if  (contrasena  ==  "2Fj(jjbFsuj"  ||  contrasena  ==  "eoZiugBfg9"){  
        console.log ( "contraseña correcta" ) ;

    }
      else   { 
         console.log ( "contraseña incorrecta" ) ;  
}
}

console.log(contrasenaValida (process.argv [ 2 ]))


// código de prueba
 console.log(contrasenaValida("2Fj(jjbFsuj")); // true
 console.log(contrasenaValida("eoZiugBf&g9")); // true
 console.log(contrasenaValida("hola")); // false
 console.log(contrasenaValida("")); // false