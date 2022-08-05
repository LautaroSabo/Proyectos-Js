


let boton_de_compra = document.getElementsByClassName("boton_compra");

console.log(boton_de_compra);


for ( let boton of boton_de_compra){


    boton.addEventListener ("click", agregar_carrito);


};


let carrito = [];




function agregar_carrito(e){

    // console.log("el evento esta en", e.target);
    // console.log("se agrego al carrito",agregar_carrito);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    
    nombre_producto = abuelo.getElementsByTagName("td");
    
    nombre1 = nombre_producto [0];
    nombre = nombre1.textContent;
    //console.log("el producto es",nombre);

    precio_producto = abuelo.getElementsByTagName("td");
    
    //console.log(precio_producto)

    precio1 = precio_producto[1];
    precio = precio1.textContent;
    //console.log("el precio es",precio);

    let producto = {                      //---------CREATE UN FOR PARA LA CANTIDAD-----------

        nombre: nombre,
        precio: precio,
    };

    carrito.push(producto);

    console.log(carrito);

    mostrar_carrito(producto);

    // guardar_datos(producto);
};




function mostrar_carrito (producto){

    let crear_carrito = document.createElement("tbody");
    crear_carrito.className = "agregado";

    crear_carrito.innerHTML = `
                                <td>${producto.nombre}</td>
                                <td>${producto.precio}</td>
                                `;
    
    let etiqueta = document.getElementById("tarjeta2");
    tarjeta2.append(crear_carrito);


} ;

function boton_guardar (){

    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", arreglo_JSON);

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })

}


//------------Para despues-------------------

// function guardar_datos(mostrar_carrito){

//     let crear_boton = document.createElement("button");
//     crear_boton.className = "botoncito";

//     crear_boton.innerHTML = `<p>Guardar Carrito</p>`

//     let boton_de_carrito = document.getElementById("boton_guardar");
//     boton_guardar.append(crear_boton);
    
// };

    // let arreglo_JSON = JSON.stringify(carrito);
    // localStorage.setItem("carrito", arreglo_JSON);