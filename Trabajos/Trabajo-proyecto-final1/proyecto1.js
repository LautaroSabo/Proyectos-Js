

let carrito =  ["Chizito" , "Papa" , "Mani" , "Caramelos"];
let precios_carrito =[ 300, 250, 400, 600];
let usuario = prompt ("Si es un usuario ingrese 1. \n Si es administrador ingrese 2.")



if (usuario == 1) {
    
    let comprador = parseInt(prompt("1. Para ver el carrito de compras \n 2. Para ver los precios mas el iva"));

    if ( comprador == 1){
        console.log ("Bienvenido al carrito de compras",carrito);
    }

    else if( comprador == 2){
    precios_carrito.forEach( function (num){
        console.log("El precio es:",num);
        console.log("El precio con iva es:", num * 1.19);
        })
    }
    
}





else if (usuario == 2){

    let administrador = prompt ("1. mostrar lista de productos \n 2. agregar productos \n 3.Borrar elementos");
    
    if (administrador == 1){
        console.log ("Los productos son",carrito);
    }
    
    else if ( administrador == 2){
        carrito.push = prompt("ingrese el producto")
        console.log(carrito)
    }

    else if ( administrador == 3){
        let borrar = prompt ("1. Para borrar desde el primero \n 2. Para borrar desde el ultimo");
        
        if ( borrar == 1){
            carrito.shift()
            console.log(carrito)
        }
        else if (borrar == 2){
            carrito.pop()
            console.log(carrito)
        }
    }
    let usuario_administrador = prompt ("seguir como administrador? si / no");

    while (usuario_administrador != "no"){
        let administrador = prompt ("1. mostrar lista de productos \n 2. agregar productos \n 3.Borrar elementos");
    
        if (administrador == 1){
            console.log ("Los productos son",carrito);
        }
        
        else if ( administrador == 2){
            carrito.push = prompt("ingrese el producto")
            console.log(carrito)
        }

        else if ( administrador == 3){
            let borrar = prompt ("1. Para borrar desde el primero \n 2. Para borrar desde el ultimo");
            
            if ( borrar == 1){
                carrito.shift()
                console.log(carrito)
            }
            else if (borrar == 2){
                carrito.pop()
                console.log(carrito)
            }
        }
        let usuario_administrador = prompt ("seguir como administrador? Si / No")
    
    }

}

else{
    prompt("No igreso la respuesta esperada")
}