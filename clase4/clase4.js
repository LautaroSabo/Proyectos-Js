

function saludar_usuario ( nombre_usuario ){
    
    
    console.log ("Buen dia" , nombre_usuario);

}



function suma_dos_num(num_uno , num_dos){

    let suma = num_uno + num_dos
    console.log("La suma es:" , suma)

}


function saludar_usuario( nombre_usuario , edad_usuario){
    

    console.log("Hola buen dia!", nombre_usuario);
    console.log("tu edad es:" , edad_usuario);
    
}

function resta_dos_num( x , y){


    let resta = x - y;
    console.log("el resultado de la resta es:", resta_dos_num)


}

function calculadora_dos_num( num_uno , num_dos){
    
    let operacion = prompt (" + - * /");

    if ( operacion == "+"){
        suma_dos_num(num_uno, num_dos);
    }

    else if( operacion == "-"){
        resta_dos_num(num_uno, num-dos);
    }



}







suma_dos_num(10 , 30);
suma_dos_num(100,50);
suma_dos_num(30,200);
suma_dos_num("JOSE",20);

// let nombre_db = "Pepe";




saludar_usuario( "marta" , 30 );
saludar_usuario( 15 , "Pepe" );
saludar_usuario( "Ramon", 20 ); 
