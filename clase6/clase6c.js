
class Alumno{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}


let lista_alumnos = [];

for( let i= 0 ; i < 3 ; i++){

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad= prompt("Ingrese su edad");

    let nuevo_alumno = new Alumno(nombre , apellido, edad);

    lista_alumnos.push(nuevo_alumno);

}


console.log(lista_alumnos);

for(let alumno of lista_alumnos){

    console.log("Mi nonbre es:" , alumno.nombre);
    console.log("y mi apellido es:" , alumno.apellido);
    console.log("tengo: " ,alumno.edad);
    console.log("<---------------------->");
}




















let producto = [
            {
                nombre:"Lampara",
                precio:100,
                url:"img/lampra.jpg"
            },
            {
                nombre:"Lampara",
                precio:100,
                url:"img/lampra.jpg"
            },
            {
                nombre:"Lampara",
                precio:100,
                url:"img/lampra.jpg"
            },
            {
                nombre:"Lampara",
                precio:100,
                url:"img/lampra.jpg"
            },





]

