
let usuario_registrado = "Pepe";
let pass_registrado = "1234";



function validar(){

    let nombre = document.getElementById("nombre_usuario");
    let pass = document.getElementById("pass_usuario");
    let mensaje = document.getElementById("mensaje");

    console.log("El nombre del usuario es:" , nombre.value);
    console.log("Y la pass es:" , pass.value);



    if( nombre.value == usuario_registrado  &&  pass.value == pass_registrado){
       let parrafo = document.createElement("p");
       parrafo.innerText = "Bienvenido/a al sistema!"
       mensaje.append(parrafo);

    }
    else{
       document.body.innerHTML = `<h2>ERROR DE USUARIO O CONTRASEÑA</h2>
                                 <p>Nombre de usuario incorrecto: ${nombre.value}</p>
                                 <p>Contraseña invalida: ${pass.value}</p>`;
    }

}






function saludar(){

    
    let nombre = document.getElementById("nombre_usuario");

    console.log(nombre);
    console.log("Hola Bienvenido/a al sistema: " , nombre.value);



}