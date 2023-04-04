//En un archivo llamado "listar.js", importe el array que se encuentra en dataBase.js 
//y cree una función que reciba por parámetro 
//una categoría liste los productos de esa categoría.


let database = require("./database");
function buscarPorCategoria(categoria) {
    let productos = database.filter(item => item.categoria === categoria);
    if (productos.length == 0){
      return "productos no encontrados"
    } 
    else {
        return productos
    }
}
console.log (buscarPorCategoria(process.argv[2]))