



// let nombre_usuario = prompt ("Ingrese su nombre de usuario");
// alert (" Buen dia: ", nombre_usuario);
// console.log ("buen dia", nombre_usuario);




let compra =  prompt ("Ingrese el nombre del producto \n \n \n 1. Chizito $300 \n 2. Mani $400 \n 3. Caramelo $250 \n 4. Papas $900 \n \n");
let cantidad = parseInt(prompt("Ingrese la cantidad que desea"));
let compra_final = 0


if (compra == "chizito") {
    compra_final = 300 * cantidad;
}

else if (compra == "mani"){
    compra_final = 400 * cantidad;
}

else if (compra == "caramelo"){
    compra_final = 250 * cantidad;
}

else if (compra == "papas" ){
    compra_final = 900 * cantidad;
}

alert (" felicidades su compra se mostrara en los comandos");
console.log (compra_final);

let seguir_comprando = prompt( " Desea seguir comprando? elija SI para seguir o NO para finalzar");

while (seguir_comprando != "no"){
compra =  prompt ("Ingrese el nombre del producto \n \n \n 1. Chizito $300 \n 2. Mani $400 \n 3. Caramelo $250 \n 4. Papas $900 \n \n");
cantidad = parseInt(prompt("Ingrese la cantidad que desea"));
compra_final = 0


if (compra == "chizito") {
    compra_final = 300 * cantidad;
}

else if (compra == "mani"){
    compra_final = 400 * cantidad;
}

else if (compra == "caramelo"){
    compra_final = 250 * cantidad;
}

else if (compra == "papas" ){
    compra_final = 900 * cantidad;
}

alert (" felicidades su compra se mostrara en los comandos");
console.log (compra_final);

seguir_comprando = prompt( " Desea seguir comprando? elija SI para seguir o NO para finalzar");
}


alert ("felicidades ya termino su compra");


