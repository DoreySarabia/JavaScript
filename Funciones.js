//D E C L A R A C I Ó N 

function miFuncion(a, b) {
   console.log('Suma: ' + (a + b));
}
//Llamar la función
miFuncion(2, 3);



//R E T U R N 

function miFuncion2(c, d) {
    return c + d;
 }

 let resultado = miFuncion2(2, 3);
 console.log(resultado);



 //F U N C I O N E S   T I P O   E X P R E S I Ó N 

let sumar = function(e, f){return e + f; }

resultado = sumar (1, 2);
console.log(resultado);



//F U N C I O N E S   T I P O   S E L F   I N V O K I N G 

//No se puede reutilizar, solo se llama en este bloque así misma
(function(g, h){
    console.log('Ejecutando la funcion ' + (g + h));
})(3, 4);




//F U N C I O N E S   C O M O   O B J E T O S 

console.log(typeof miFuncion);

function miFuncion2(i, j) {
    console.log(arguments.length);
    return i + j;
 }


 // To-String
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);




//F U N C I O N E S    F L E C H A 

const sumarFuncionTipoFlecha = (a, b) => a + b; 
resultado = sumarFuncionTipoFlecha(3, 5); 
console.log(resultado);




//P A R A M E T R O S 
//Lista de variables

//A R G U M E N T O S 
//Sobreescriben los valores de los parametros

//               ---parametros---
sumar = function (v1 = 4, v2 = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return v1 + v2
};
//       ---Argumentos---
resultado = sumar(3, 6); 
console.log(resultado);

 


// E J E M P L O    S U M A R    A R G U M E N T O S

let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11);
console.log(resultado);

function sumarTodo() {
    let suma = 0; 
    for(let i=0; i<arguments.length; i++){
       suma += arguments[i];
    }
    return suma;
}



//P A S O   P O R   V A L O R 
//Tipos primitivos (No objeto)

let x = 10; 
function cambiarValor(a){
    a = 20; 
}

cambiarValor(x); 
console.log(x);
//console.log(a);



//P A S O   P O R   R E F E R E N C I A 
//Propiedades y métodos

const persona = {
    nombre: 'Nombre', 
    apellido: 'Apellido'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Nombre2';
    p1.apellido = 'Apellido2';
}

cambiarValorObjeto(persona);
console.log(persona);