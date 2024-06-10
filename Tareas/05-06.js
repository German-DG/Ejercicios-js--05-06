//TAREA
//1 - Crea una variable con tu nombre, otra con tu apellido y concaténalas con el mensaje de bienvenida: 'Bienvenido al evento' usando template string.
let nombre = "german";
console.log(nombre)
let apellido = "guaraz";
console.log(apellido)
let mensaje = "Bienvenido al evento";
console.log(`${mensaje} ${nombre} ${apellido}`);
//2 - Usando métodos de String quita los espacios de adelante y de atrás del siguiente texto: '              Había una vez un pequeño programador junior       '
let frase ="              Había una vez un pequeño programador junior       ";
let fraseSinEspacio = frase.trim("");
console.log(`${fraseSinEspacio}` )
//3 - Convierte a mayúsculas tu nombre y apellido usando las variables definidas en el punto 1
console.log(nombre.toUpperCase());
console.log(apellido.toUpperCase());
//4 - Crea un programita que le pida al usuario que ingrese un texto, convierte dicho texto en mayúsculas y muestra en consola cuantos caracteres tiene el texto recibido usando propiedades de los String.
let programita = prompt("Ingrese un texto");
console.log(`${programita}`)
console.log(programita.toUpperCase());
//5 - a - Crea un programa que solicite al usuario ingresar un número con 5 decimales, almacenar dicho número en una variable asegurándose que sea de tipo number. Mostrar en consola lo siguiente:
 // - b - El número redondeado a su mayor valor
 // - c - El número redondeado a su menor valor
 // - d - El número original multiplicado por 3
 // - e - El resto del número dividido por 2
//5
//a
let decimalR = prompt("Ingrese un numero de 5 decimales por ej:0.12345");
console.log(`${decimalR}`)
console.log(decimalR.toUpperCase());
let decimal = 0.12345
//b
console.log(Math.ceil(decimal)); // arriba
//c
console.log(Math.floor(decimal)); // abajo
//d
console.log(decimal * 3);
//e
//No entendi