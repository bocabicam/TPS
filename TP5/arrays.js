// Dados 2 arrays ["Juan", "Dani"] y ["Leo", "Monica", "Juliana"], escribir una función que 
//concatene "unifique" los dos array y devuelva un solo 
// array ["Juan", "Dani", "Leo", "Monica", "Juliana"].


let arrays1 = ["Juan" , "Dani"]    
let arrays2 = ["Leo", "Monica","Juliana"]
   
arrays1=arrays1.concat(arrays2);
console.log(arrays1);
    

// Escriba una función con el nombre de esVocal() que tome un carácter,

// devuelva True si es vocal (no importa si es mayúscula o minúscula), y 
//devuelva False en caso contrario.
  
function esVocal(letra){
    letra = letra.toLowerCase()
    if (letra === "a" || letra === "e" || letra === "i"|| letra === "o" || letra === "u"){
        return true 
    }   else {
        return false
    }
}
console.log (esVocal("E"));

// Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n)
//  y un carácter, devolver el carácter multiplicado por n. 
//Por ejemplo, generar_caracteres(5,x),
//  debería devolver «xxxxx».

function generar_caracteres(numero,caracter){
    return caracter.repeat(numero)

}
console.log(generar_caracteres(4,"y"))


// Crear una función sumaArray() que tome como parámetro un array de números, devolver 
// la suma de todos los números del arreglo.

function sumaArreglo(arr){
        return arr.reduce((a,b)=>a + b)
}
console.log(sumaArreglo([10,20]))

// Crea una función llamada numeroMayor() que toma tres números como entrada 
// y retornar el numero mayor de ellos, si son iguales devolver 
// un String «son iguales».
function  numeroMayor ( n1 ,  n2 ,  n3 ) {
    if ( n1 === n2  &&  n2 === n3 ) {
        return  "son iguales"
    } 
    else if (n1 > n2 && n1 > n3 ){
        return "n1 es  mayor"
    }
    else if (n2 > n1 && n2 > n3 ){
        return "n2 es mayor"
    }
    else if (n3 > n1 && n3 > n2 ){
        return "n3 es mayor"
    }
}
console.log (numeroMayor ( 10 , 20 , 30 ))



