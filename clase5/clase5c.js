

class Alumnos_coder{

    constructor( nombre,  apellido ,  email){

        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.nota_uno = 0;
        this.nota_dos = 0;

    }


    saludar(){
        console.log("Hola mi nombre es:", this.nombre);
    }

    get_datos(){
        console.log("<--Datos del alumno-->" );
        console.log("nombre" , this.nombre);
        console.log("apeliido" , this.apellido);
        console.log("email" , this.email);
    }


    set_nota_uno( nota ){
        this.nota_uno = nota;
    }

    set_nota_dos( nota ){
        this.nota_dos = nota;
    }

    get_notas(){
        console.log("Nota 1:" , this.nota_uno);
        console.log("Nota 2:" , this.nota_dos);
    }

}


let alumno_uno = new Alumnos_coder('Luisa', "Malrmol", 38);
let alumno_dos = new Alumnos_coder('Pepe', "Lopez", 23);

console.log( "nombre:", alumno_uno );


alumno_uno.saludar();
alumno_dos.saludar();