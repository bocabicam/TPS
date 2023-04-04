//En un archivo llamado "busqueda.js", importe el array que se encuentra en dataBase.js y 
//cree una función que acepte como parámetro un id numérico y 
//devuelva el producto correspondiente.


let database = require("./database");
function buscarPorId(numero) {
    let producto = database.find(item => item.id === +numero);
    if (producto){
      return producto
    } 
    else {
        return "producto no encontrado"
    }
}
console.log (buscarPorId(process.argv[2]))

//En el archivo creado en el ejercicio 1, llamado busqueda.js, crear 
//otra función que me permita buscar los productos cuyos precios sean menores 
//a un precio que pase por parámetro.


function buscarPorPrecio(precio) {
    let productos = database.filter(item => item.precio <= +precio);
    if (productos.length == 0){
      return "productos no encontrados"
    } 
    else {
        return productos
    }
}
console.log (buscarPorPrecio(process.argv[2]))


