
// En un archivo llamado "agregar.js", importe la matriz que se encuentra en dataBase.js y 
// cree una función que me permita agregar un producto a la lista. 
// Ingresando por parámetros, el id, nombre, descripción, categoría y precio. 
// mostrarlo en un console.log

let database = require("./database");
function agregarProducto(id =process.argv[2], nombre =process.argv[3], descripcion =process.argv[4], categoria =process.argv[5] , precio =process.argv[6]){ 
    let producto = {
        id , nombre, descripcion, categoria, precio
    }
    database.push( producto);
    return database 
    ;
}

 console.log(agregarProducto());



