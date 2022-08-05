


function calculadora_iva(){

    let iva = precio * 1.21;
    return iva
    

}






console.log("Bienvenidos a Mercado Libro");
let productos = prompt("ingrese el nombre del producto");
let precio = parseInt(prompt("ingrese el precio del producto"));


console.log("<---------------------------->");
console.log("Nombre: ", productos);
console.log("precio:" , precio)

let iva_resultado = precio + calculadora_iva(precio);
console.log("EL precio mas iva",iva_resultado);

// let precio_menos_iva = precio
