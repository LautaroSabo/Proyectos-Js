


let boton_de_compra = document.getElementsByClassName("boton_compra");

    // console.log(boton_de_compra);


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


const products = [];
const getProducts = async () =>
{
    try
    {
        const response = await fetch ("data.json");
        const data = await response.json ();
        console.log("data from json:", data);
        loadProducts(data);
        products.push(...data);
        console.log(products);
    }
    catch(error)
    {
        console.log(error);
    }
};
getProducts();



    const loadEvents = () =>
    {
        let buttons = document.getElementsByClassName("add")
        console.log(buttons);
        for (const element of buttons)
        {
            element.addEventListener ("click",() =>{
                console.log(element.id);
                alert("se selecciono el producto con id" + element.id);
            })
        }
    }

    const loadProducts = (prods) =>
    {   
        let container = document.getElementsByTagName("table"); 
        
        
        for (const element of prods)
        {   
            let div = document.createElement("tr"); 
            
            div.innerHTML = 
            ` 
            <tr>
                <td>$${element.price}</td>
                <td>${element.name}</td>
                <td><button id="${element.id}" class='boton_compra'>Agregar al carrito</button> </td>
            </tr>
            `;
            // console.log("que pasa", div);
            
            container[0].appendChild(div);
        }
    
        
        loadEvents();
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