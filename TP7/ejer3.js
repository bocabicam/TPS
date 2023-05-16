// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor 
// que determina la cantidad de grasa de una persona.

// El IMC se calcula con la siguiente fórmula:peso / altura^2

// Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y 
// devolver una cadena con las siguientes posibilidades:

//  
 //escribe la función bmi acá

function bmi(peso, altura){
        const  bmi  =  peso  /  Math.pow ( altura ,  2 ) ;
        
    if  ( bmi  <  18.5 ) {
            return  'Bajo de Peso'
        }  
        else if ( bmi  >=  18.5  &&  bmi  <=  24.9 ){
            return  'Normal'
        }  
        else  if ( bmi  >=  25  &&  bmi  <=  29.9 ){
           
            return  'Sobrepreso'
        } 
        else if ( bmi  >=  30 ){
            return 'Obeso'
}
}

// código de prueba
console.log(bmi(65, 1.80)); // "Normal"
console.log(bmi(72, 1.60)); // "Sobrepeso"
console.log(bmi(52, 1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.70)); // "Obeso"
