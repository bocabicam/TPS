//1 - Escribir una función a la que se le pase una cadena "nombre" y muestre por pantalla 
//el saludo ¡hola nombre!.

function saludo(nombre){
   return "hola " + nombre ;
   
}
console.log(saludo("Juan"))


//2 -Escribir un programa que le pida al usuario que ingrese su nombre apellido 
//edad y muestre un objeto con los datos ingresados.

//Ej:



function elementos(){ 
let objeto = {
    nombre: process.argv[2],
    apellido :process.argv[3],
     edad : process.argv[4]
 
}
console.log(objeto)
}
elementos()

//3 -Escribir una funcion que espere dos parámetros, uno de los cuales deberá ser un array, y 
//el otro parámetro debe ser el elemento a buscar en el array. Si lo encuentra debera 
//devoler "Elemento encontrado en la posicion (posición)".
//Ej.

const miLista1 = [2, "Eric", "Jarra"]
const miLista2 = ["Leche", "Café", "Chocolate"]

function buscarElemento(arr, item) {
  let resultado = arr.indexOf(item)
  if (resultado == -1) {
    console.log("elemento no encontrado")
  }
  else {
    console.log(resultado) 
  }
  }

buscarElemento(miLista1, "Jarra")
// Esta funcion debe retornar:
// Elemento encontrado en la posicion 2

buscarElemento(miLista2, "Café")
// Esta funcion debe retornar:
// Elemento encontrado en la posicion 1

//Dada un lista o array, escribir un programa que invierta sus elementos.
//Ej
let arr = [3,5,7,8]
console.log(arr.reverse())



