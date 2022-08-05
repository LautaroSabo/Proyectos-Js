
    // --------WHILE-------
    
    
    alert ("si la suma entre dos numeros que usted elija, da 35. se cierra el bucle")
    
    let a = parseInt(prompt("Primer valor"));
    let b = parseInt(prompt("Segundo Valor"));

    let resultado = parseInt(a) + parseInt(b);

while (resultado != 35){

    console.log("tu resultado hasta ahora es:",  resultado);

    alert ("Intentelo de nuevo");
    a = parseInt(prompt("Primer valor"));
    b = parseInt(prompt("Segundo Valor"));
    
    resultado = parseInt(a) + parseInt(b);
    

}
alert ("Felicidades. terminaste el bucle");


