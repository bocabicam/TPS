// Escribir una función llamada sumarRango que reciba
//  dos argumentos: número inicial y número final. La función
//  debe devolver la suma de los números en ese rango (incluyéndolos).

// Nota: puede asumir que el número inicial va a ser menor o igual que el número final.

// escribe tu respuesta acá
function  sumarRango ( numero1 , numero2 ) {
    let ​​resultado  =  0 ;
    for ( i = numero1 ;  i < numero2 + 1 ;  i ++ ) {
        resultado  +=  resultado
    } return  resultado
}
   


// código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0