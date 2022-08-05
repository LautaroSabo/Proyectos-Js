

alert ("Hola pepe")

//VARIABLES

let nombre = "Pepe"; 
let edad;

edad = 18;
nombre = "Laura"; //Los valores se pueden ir reasignando. laura pisa a pepe


//string: cadena de texto. valor compuesto por uno o mas caracteres,definido entre comillas simples o

// valor numerico puede ser entero o decimal



console.log ( nombre );
console.log ( edad );


//OPERADORES


//SUMA + 
let num_uno = 30;
let num_dos = 40;

let suma = 50 + 20;//70

suma = 100 + 40;//140

suma = num_uno + 30;//60

suma = num_dos + 20 + num_uno;//90

console.log (suma)



//RESTA


let resta = 100 - 20;
console.log (resta);


//DIVISION

let divi = 10 / 2;
console.log  ( div );


//MULTIPLICACION 

let multi = 10 * 3;
console.log (multi)



//CONCATENAR +

let nombre_apellido = "Pepe" + "Lopez"
console.log(nombre_apellido)

let resultado = "Jose" + 10;
console.log ( resultado );


//I/O


//SALIDAS

alert("Hola chicos");

alert(suma);

let valor = 30;
console.log("valor");//30
console.log(30);

//ENTRADAS

let nombre_usuario = prompt("Ingrese su nombre");
console.log (nombre_usuario);


let x = prompt ("Ingrese un numero");
let y = prompt ("ingrese otro numero");

let suma_numeros = parsenInt (x) + parsenInt (y);
console.log("la sume es:" , suma_numeros);


console.log (parseInt("30"));//Nan (no se pudo transformar en numero)
console.log (parseInt("Jose"));//30