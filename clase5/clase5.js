

// let nombre_usuario_uno = "Pepe";
// let apellido_usuario_uno = "Lopez";
// let edad_usuario_uno = 32;


// let nombre_usuario_dos = "Luis";
// let apellido_usuario_dos = "Rojas";
// let edad_usuario_dos = 55;


// let nombre_usuario_tres = "Marta";
// let apellido_usuario_tres = "Gomez";
// let edad_usuario_tres = 50;


// ------OBJETOS LITERALES-------



// let usuario_uno = {

//     nombre: "Pepe",
//     apellido:"Lopez",
//     edad:32

// };

// console.log("El nombre del usuario es: " , usuario_uno.nombre)
// console.log("El apellido del usuario es: " , usuario_uno.apellido)



// OBJETOS PERRO: Raza, nombre, color , dueño

let perro_uno = {

    raza: "mestizo",
    nombre: "coraje",
    color: "Rosa",
    dueño:"Muriel",

    ladrar: function(){
        console.log("CORAJE: GUA GUA")
    }
}


let perro_dos = {

    raza: "Gran danes",
    nombre: "scooby",
    color:"Marron",
    dueño:"Shaggy",

    ladrar: function(){
        console.log("SCOOBY: GUA GUA")
    }

}

console.log(" El nombre del perro uno es: ", perro_uno.nombre)
console.log(" El nombre del perro dos es: ", perro_dos.nombre)

perro_uno.ladrar();

perro_dos.ladrar();












