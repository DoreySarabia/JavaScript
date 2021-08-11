//Tipo de dato String
var nombre = "Nombre"; 
console.log(nombre); 

nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000; 
console.log(numero);

//Objeto

var objeto = {
    nombre   : "Nombre",
    apellido : "Apellido",
    telefono : "12345"
}
console.log(typeof objeto); 

//Tipo de dato boolean (true or false)
var bandera = true; 
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
//crear valores unicos de variable
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo de clase es una funcion

class persona{
    constructor(nombre, apellido){
        this.nombre = nombre; 
        this.apellido = apellido;
    }
}
console.log(typeof persona);

//Tipo undefined
var x; 
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y =null;
console.log(typeof y);

//Arrays tipo object 
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//Valores vacios 
var z = '';
console.log(z);
console.log (typeof z);

//concatenar cadenas 
var nombre = 'nombre1'; 
var apellido = 'apellido'; 
var nombrecompleto = nombre + ' ' + apellido;
console.log(nombrecompleto);

var nombrecompleto2 = 'nombre' + ' ' + 'apellido';
console.log(nombrecompleto2);

var x = nombre + 2 + 3; 
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre; 
console.log(x);  

 let nombre;
nombre = 'nombre';
console.log(nombre);

const apellido = 'apellido'; 
apellido = 'apellido2'; 

//Declarar variables 
let nombreCompleto = 'Nombre Apellido'; //Notación altas y bajas
console.log(nombreCompleto);

let x, y; 
x = 10, y = 20;
let z = x + y; 
console.log(z); 

//Sensible a mayusculas y minusculas, no comenzar variables con numeros
let nombreCompleto = 'Nombre Apellido'; 
let nombrecompleto = 'Nombre1 Apellido1'; 
console.log(nombreCompleto); 
console.log(nombrecompleto);

//Casos para comenzar variables
let a1nombre; 
let _nombre;
let $nombre; 

//No utilizar palaabras reservadas para nombre de variables
//let break = 10; 

