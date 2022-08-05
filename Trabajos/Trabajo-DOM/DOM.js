


let boton = document.getElementById("boton")

boton.addEventListener("click" , function(){

    let producto = document.getElementById("producto");
    let lista = document.getElementById("lista")

    console.log(producto);
    console.log(lista);

    let li = document.createElement("li");

    li.innerHTML = `<span> ${producto.value} </span>
                    <button class="borrar">borrar</button`;

    lista.append(li)

    

})