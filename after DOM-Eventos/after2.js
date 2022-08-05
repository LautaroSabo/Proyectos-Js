

let boton = document.getElementById("boton");


boton.addEventListener("click", function () {

    let producto = document.getElementById("producto");
    let lista = document.getElementById("lista");


    let li = document.createElement("li");

    li.innerHTML = `<span>${producto.value}</span>
                    <button class="borrar">Borrar</button>`;


    lista.append(li);


    let botones_borrar = document.querySelectorAll(".borrar");

    console.log(botones_borrar);

    for (let boton of botones_borrar) {

        boton.addEventListener("click", borrar_elemento);

    }




})



function borrar_elemento(e) {

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    /*
    console.log(hijo);
    console.log(padre);
    console.log(abuelo);¨
    */

    padre.remove();

}