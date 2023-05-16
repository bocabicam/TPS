
// Escribir una función llamada calcularImpuestosque reciba dos 
// argumentos numéricos: edade ingresos. Si edades igual o mayor a 18 y 
// los ingresos son iguales o mayores a 1000 debe devolver ingresos* 40%. De lo 
// contrario retornar 0.

// escribe tu respuesta acá

function calcularImpuestos(edades,ingresos){
    if (edades >= 18 && ingresos >= 1000){
    return ingresos * 1.40;
    }
    else{
        return 0;
    }
}
// código de prueba
console.log(calcularImpuestos(18, 1000)); // 400
console.log(calcularImpuestos(40, 10000)); // 4000
console.log(calcularImpuestos(17, 5000)); // 0
console.log(calcularImpuestos(30, 500)); // 0