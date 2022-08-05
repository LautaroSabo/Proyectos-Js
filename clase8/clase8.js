



let titulo = document.getElementById("titulo");
console.log( titulo );
console.log( titulo.innerText );

titulo.innerText = "Chau chicos y chicas!"





let parrafos = document.getElementsByClassName("parrafos");

console.log(parrafos[0]);
console.log(parrafos[1]);


let li = document.getElementsByTagName("li");

console.log(li);


for( let elemento of li){

    console.log(elemento);
}




let contenedor = document.getElementById("contenedor");

contenedor.innerHTML = "<p class='parrafo_rojo'>Parrafo generado en JS</p>";
contenedor.innerHTML = "<p class='parrafo_rojo'>OTRO PARRAFO</p>";
contenedor.className = "fondo_azul";


let parrafo_js = document.createElement("p");
parrafo_js.innerText = "PARRAFO CREADO DESDE JS";
parrafo_js.className = "fondo_azul";
contenedor.append( parrafo_js );


//contenedor.remove();