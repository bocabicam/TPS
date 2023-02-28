// ejercicio 1
const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
if (numeroRandom % 2 === 0){
    console.log("es numero par")
}
else{
    console.log(" no es numero par")
}

// ejercicio 2

let palabra1 = "tren";
let palabra2 = "edificio";

if(palabra1.length > palabra2.length){
    console.log(palabra1)
}
else{
    console.log(palabra2)
}




// ejercicio 3
for(let i = 1; i <= 10 ; i++ ){
    console.log( i * 9);
}
// ejercicio 4
function multiplicar(n){
    return n * 23;

}
const resultado = multiplicar(2);
console.log(resultado)

// ejercicio 5

let arrayVacio = [];
for(let i = 1; i <= 10 ; i++) { 
    const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    arrayVacio.push(numeroRandom)
}
console.log(arrayVacio)