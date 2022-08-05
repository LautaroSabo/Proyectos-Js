

//METODOS

let lista_usuario = ["Jose" , "Marta" ,"Pedro"];

console.log("LISTA AL PRINCIPIO: " , lista_usuario);


//PUSH
lista_usuario.push("Pepe");

console.log("LISTA DESPUES DEL PUSH: ", lista_usuario);


//UNSHIFT

lista_usuario.unshift("Alejandro");

console.log("LISTA DESPUES DEL UNSHIFT: ", lista_usuario);



//POP

let resultado_pop = lista_usuario.pop();
console.log("LISTA DESPUES DEL POP: " , lista_usuario);
console.log("SE SACO DEL ARREGLO A: ", resultado_pop);


//SHIFT

lista_usuario.shift();
console.log("LISTA DESPUES DEL SHIFT: " , lista_usuario);


//SPLICE
let nueva_lista = ["Naranjas" , "Peras" , "Frutilla" , "Papas" , "Kiwis" , 10];
console.log("NUEVA LISTA INICIAL: ", nueva_lista);

//nueva_lista.splice(2,1)
nueva_lista.splice(2,1,"Nuevo valor");
console.log("LISTA DESPUES DEL SPLICE: " , nueva_lista);


//JOIN

let resultado_join = nueva_lista.join(" ");
console.log("RESULTADO JOIN: " , resultado_join);


//CONCAT 

lista_colores = ["Azul" , "Rojo" , "Verde"];

let resultado_concat = nueva_lista.concat(lista_colores);
console.log("LISTA CONCATENADA: " , resultado_concat);


//SLICE

let corte = nueva_lista.slice(2,4);
console.log("NUEVA LISTA DESPUES DEL SLICE: ", nueva_lista);
console.log("CORTE DEL SLICE: " , corte);


//indexOf

console.log("El index de Naranjas es: " , nueva_lista.indexOf("Naranjas"));
console.log("El index de Pepe es:" , nueva_lista.indexOf("Pepe"));

let fruta_a_eliminar = nueva_lista.indexOf("Frutilla");
nueva_lista.splice( fruta_a_eliminar , 1);
console.log("NUEVA LISTA DESPUES DE INDEXOF + SPLICE: " , nueva_lista);


