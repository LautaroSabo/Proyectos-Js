


function ibuprofeno_400 (){

    let ibuprofeno_400 = {id: 1, nombre: "Ibuprofeno 400",precio: 70}

    document.getElementById("compras")
    let carrito = document.createElement("table");
    carrito.className = "agregado";
    
    
    carrito.innerHTML =         `
                                <h3>CARRITO</h3>
                                <td> ID: ${ibuprofeno_400.id}</td>   
                                <td> Producto: ${ibuprofeno_400.nombre}</td>
                                <td> $${ibuprofeno_400.precio}</td>
                                `;
    
    compras.append(carrito);

}

function ibuprofeno_600 (){

    let ibuprofeno_600 = {id: 2, nombre: "Ibuprofeno 600",precio: 110}

    document.getElementById("compras")
    let carrito = document.createElement("table");
    carrito.className = "agregado";
    
    
    carrito.innerHTML =         `
                                
                                <td> ID: ${ibuprofeno_600.id}</td>   
                                <td> Producto: ${ibuprofeno_600.nombre}</td>
                                <td> $${ibuprofeno_600.precio}</td>
                                `;
    
    compras.append(carrito);

}

function actron_400 (){

    let actron_400 = {id: 3, nombre: "Actron 400",precio: 230}

    document.getElementById("compras")
    let carrito = document.createElement("table");
    carrito.className = "agregado";
    
    
    carrito.innerHTML =         `
                                
                                <td> ID: ${actron_400.id}</td>   
                                <td> Producto: ${actron_400.nombre}</td>
                                <td> $${actron_400.precio}</td>
                                `;
    
    compras.append(carrito);

}

function actron_mujer (){

    let actron_mujer = {id: 3, nombre: "Actron Mujer",precio: 270}

    document.getElementById("compras")
    let carrito = document.createElement("table");
    carrito.className = "agregado";
    
    
    carrito.innerHTML =         `
                                
                                <td> ID: ${actron_mujer.id}</td>   
                                <td> Producto: ${actron_mujer.nombre}</td>
                                <td> $${actron_mujer.precio}</td>
                                `;
    
    compras.append(carrito);

}

function sertal_compuesto (){

    let sertal_compuesto = {id: 4, nombre: "Sertal Compuesto",precio: 450}

    document.getElementById("compras")
    let carrito = document.createElement("table");
    carrito.className = "agregado";
    
    
    carrito.innerHTML =         `
                                
                                <td> ID: ${sertal_compuesto.id}</td>   
                                <td> Producto: ${sertal_compuesto.nombre}</td>
                                <td> $${sertal_compuesto.precio}</td>
                                `;
    
    compras.append(carrito);

}


// function ibuprofeno_400 (){

//     let ibuprofeno_400 = {id: 1, nombre: "arroz",precio: 125}


//     let mensaje = document.getElementById("agregado");
//     let carrito = document.createElement("tr");
//     carrito.innerHTML = `       
//                                 <td> ID: ${ibuprofeno_400.id}</td>   
//                                 <td> Producto: ${ibuprofeno_400.nombre}</td>
//                                 <td> $${ibuprofeno_400.precio}</td>
//                                 `;
    
//     mensaje.append(carrito);

// }