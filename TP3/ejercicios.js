//ejercicio 1
//Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

const readlineSync = require("readline-sync")

const palabra = readlineSync.question("escriba una palabra")

for (n = 0 ; n < 10 ; n++){
    console.log(palabra)
} 

//ejercicio 2
//Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años 
//que ha cumplido (desde 1 hasta su edad)

const edad = readlineSync.question("Ingrese su edad: ")
for (i = 0; i < edad;) {
    console.log("Edad # ", ++i)
}

//ejercicio 3
//Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla 
//todos los números impares desde 1 hasta ese número separados por comas.


const numeroImpar = readlineSync.question("ingrese un numero entero: ");
for(let i = 0; i <= numeroImpar; i++) {
  if(i % 2 !== 0) {
    console.log(i + ",");
  }
}
//ejercicio 4
//Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo     
//rectángulo como el de más abajo, de altura el número introducido.

//*
//**
//***
//****
//*****

const numeroEntero =  readlineSync.question("ingrese un numero entero: ")
 for ( let i = 1; i <= numeroEntero; i++){
  console.log("*".repeat(i)) 
 }




//ejercicio 5
//Escribir un programa que pida al usuario una palabra y luego muestre por pantalla 
//una a una las letras de la palabra  introducida empezando por la última.

const palabra =  readlineSync.question("ingrese una palabra: ");
for(let i = palabra.length - 1; i >= 0; i-- ){
  console.log(palabra[i])

}