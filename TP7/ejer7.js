// Escribir una función llamada contarRango que reciba dos números y 
// devolver cuántos números hay entre ellos (excluyéndolos):

// Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser 
// menor que el segundo.

// escribe tu respuesta acá
function contarRango(N1,N2){
    return ( N2 -1 ) - N1;

}
// código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0