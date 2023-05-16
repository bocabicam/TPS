
// Escribir una función llamada imprimirArreglo  que 
// reciba un arreglo e imprima cada elemento en una línea a parte:

// escribe tu respuesta acá
function  imprimirArreglo(arreglo){
        for  ( i = 0 ;  i < arreglo.length ;i++) {
            console.log(arreglo[i]) ;
        }
        return ""
    }

// código de prueba
console.log(imprimirArreglo([1, "Hola", 2, "Mundo"]));
// 1
// Hola
// 2
// Mundo