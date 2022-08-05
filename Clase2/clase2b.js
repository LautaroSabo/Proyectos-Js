
// let a = prompt("Ingrese un numero");
// let b = prompt("Ingrese otro numero");
// let operacion = prompt("Para la suma: + Resta: - Multiplicacion: *")


// if(operacion == "+"){
//     let suma = paseInt(a) + parseInt(b);

//     console.log("El resultado de la suma es:" , suma); 
// }

// else if( operacion == "-"){
//     let resta = paseInt(a) - parseInt(b);
//     console.log("La resta es" , resta);
// }

// else if (operacion == "*");{
//     let multi = paseInt(a) * paseInt(b);
//     console.log("la multiplicacion es:" , multi);
// }

// else {
//     console.log("OPERACION NO ENCONTRADA;" , operacion);
// }




// if( 10 == 10){

//     console.log("se cumple");
// }



//SE INGRESA UNA EDAD INGRESA AL CINE

let edad = parsenInt(prompt("Ingrese un numero"));
let tutor = prompt("Vinisite con tutor: SI o NO");

if( edad >= 18){
    console.log("Bienvenido al cine");
}

else if( edad >= 16 && tutor == "SI"){
    console.log("Bienvenido al cine");
}


else{
    console.log("a mirar los dibujitos");
}