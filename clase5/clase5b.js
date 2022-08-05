

// FUNCION CONSTRUCTORA


function usuario(nombre,apellido,edad){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

}

let usuario_uno = new usuario("Pepe" , "Lopez", 30);
let usuario_dos = new usuario("Marta" , "Rojas", 20);

console.log(usuario_uno.nombre);
console.log(usuario_dos.nombre);