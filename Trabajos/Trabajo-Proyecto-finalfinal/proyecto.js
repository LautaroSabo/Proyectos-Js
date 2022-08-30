

// --------FECTH CARRITO--------

const getProducts = async () => 
{
    try 
    {
        const response = await fetch("data.json");
        const data = await response.json();
        // console.log("data from json:", data);
        loadProducts(data);
        products.push(...data);
        // console.log(products);
    }
    catch (error) {
        console.log(error);
    }
};

const loadProducts = (prods) => {
    let container = document.getElementsByTagName("table");


    for (const element of prods) {
        let div = document.createElement("tr");

        div.innerHTML =
            ` 
        <tr>
            <td>${element.name}</td>
            <td>$${element.price}</td>
            <td><button id="${element.id}" class='boton_compra'>Agregar</button> </td>
        </tr>
        `;
        // console.log("que pasa", div);

        container[0].appendChild(div);
    }


    loadEvents();
}

getProducts();

const products = [];
console.log("los productos son:", products);

const loadEvents = () => {

    let buttons = document.getElementsByClassName("boton_compra");
    console.log("botones", buttons);
    for (let element of buttons) {
        element.addEventListener("click", (e) => {
            let hijo = e.target;
            let padre = hijo.parentNode;
            let abuelo = padre.parentNode;
            // console.log(padre);
            // console.log(abuelo);


            nombre_producto = abuelo.getElementsByTagName("td");
            nombre1 = nombre_producto[0];
            nombre = nombre1.textContent;
            // console.log("el producto es",nombre);
            precio_producto = abuelo.getElementsByTagName("td");
            precio1 = precio_producto[1];
            precio = precio1.textContent;
            // console.log("el precio es",precio);
            let producto_final = [precio,nombre];
            console.log(producto_final);


            // console.log(element.id);
            alert("se selecciono el producto con id " + element.id);


            let crear_carrito = document.createElement("tbody");
            crear_carrito.className = "agregado";

            crear_carrito.innerHTML = `
                                <td>${producto_final[1]}</td>
                                <td>${producto_final[0]}</td>
                                `;


            let etiqueta = document.getElementById("tarjeta2");
            tarjeta2.append(crear_carrito);



        })
        

    }
}



// ---------BOTON CARRITO--------

let bton = document.querySelector("#boton_guardar");
console.log(bton);
bton.addEventListener('click', () => {

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu carrito ha sido guardado!',
        showConfirmButton: false,
        timer: 1500
    })

    // let arreglo_JSON = JSON.stringify(carrito);
    // localStorage.setItem("carrito", arreglo_JSON);


});


// const searchInput = document.getElementById("search")

// searchInput.addEventListener("keyup", (a)=> {
//     console.log(a.target.value);
//     const productos_filtrados = nombre.filter(products => nombre.include(a.target.value));
//     console.log(productos_filtrados);
//     // let innerContent = "";
//     // for (const heroe of heroesFiltrados) {
//     //     innerContent += `<li>${heroe}</li>`
//     // }
//     // lista.innerHTML = innerContent;
// })













