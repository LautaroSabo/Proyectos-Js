

function mayor_edad (edad){
    
    let edad = prompt ("Buen dia determine su edad:");
    
    if (edad >= 18 ){
        // console.log("es mayor de edad",edad);
        return true
    }

    else if( edad < 18){
        // console.log(" es menor edad 13",edad);
        return false
    }
    
    // else{
    //     // console.log ("no se ingreso edad",edad);
    //     return false
    // }



}



if (mayor_edad(18)){
    console.log("Bienvenido al mambo");
}
else{
    console.log("no podes ingresar");
}








// mayor_edad (20);
// mayor_edad (13);
// mayor_edad ("pepe");