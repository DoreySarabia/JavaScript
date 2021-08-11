
let a = 3, b= 2; 
let z = a + b; 

console.log("Resultado suma: " + z ); 

z = a - b; 
console.log("Resultado resta: " + z); 

z = a * b; 
console.log("Resultado multiplicacion: " + z); 

z = a / b; 
console.log("Resultado divicion: " + z); 

z = a % b; 
console.log("Resultado de residuo " + z); 

z = a ** b; 
console.log("Resultado de exponente: " + z); 




let a = 3, b= 2; 
let z = a + b;
//Incremento 
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a); 
console.log(z);

//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Predecremento
z = --a;
console.log(a);
console.log(z);

//Postdecremento
z = b--;
console.log(b);
console.log(z);
 

//Precedencia de operadores
let a = 3, b = 2, c = 1, d = 4; 

let z = a * b + c / d;
console.log(z);

z = c + a * b / d; 
console.log(z);

z = (c + a) * b / c;
console.log(z);

//Operadores de asignacion

let a = 1; 

//operador de asinacion compuesto 
a += 3; //a = a + 3
console.log(a); 

a -= 2;  //a = a -2
console.log(a);

 
//Operadores de asignacion
// *=
// /=
// %=
// **=



//Operadores de comparación 
//let a = 3, b = 2, c = "3";

//revisa el valor sin importar el tipo
let z = a == b; 

console.log(z);
//Igualdad de manera estricta

//revisa los valores y los tipos
z = a === c; 
console.log(z);

z = a != c; 
console.log(z);

z = a !== c; 
console.log(z); 

//Operadores relacionales 

let z = a < b; 
console.log(z); 

z = a <= b; 
console.log(z);

z = a > b; 
console.log(z); 

z = a >= b; 
console.log(z); 



// E J E M P L O    N U M E R O   P A R 
let a = 9; 

if(a % 2 == 0){
    console.log("Es numero par");
}
else{
    console.log("Es un numero impar");
}

// E J E M P L O   M A Y O R   D E   E D A D 
let edads = 18, adulto = 18; 

if (edads >= adulto){
    console.log("Es adulto"); 
}else{
    console.log("Es menor de edad");
}

//Operadores logicos 
// AND --> &&
//Regresa true si ambos son true
let b = 15;
let valMin = 0, valMax = 10; 

if (b >= valMin && b <= valMax){ 
    console.log("Dentro del rango");
}else{
    console.log("Fuera de rango");
}

//OR --> ||
//Regresa true con cualquiera que sea true
let vacaciones = true, diaDescanso = false;

if (vacaciones || diaDescanso){
    console.log("Puede asistir al juego");
}else{
    console.log("Padre ocupado");
}

//Operador ternario ---> ?

let resultado = (1 > 2) ? "Verdadero" : "Falso";
console.log(resultado);

//Numero par-impar
let numero = 9;
resultado = (numero % 2 == 0) ? "Numero par" : "Numero impar";
console.log(resultado); 

//Convertir string a numero

let miNumero = 20;
let edad = Number(miNumero);
console.log(typeof edad); 


if (isNaN(edad)){
    console.log("No es un numero");
}else{
    resultado = (edad >= 18) ? "Puede votar" : "No puede votar";
    console.log(resultado)
}



//Precedencia de operadores
let x = 5;
let y = 10;
let z = ++x + y--;

console.log(x);
console.log(y);
console.log(z);

let resultado = 4 + 5 * 6 / 3;
console.log(resultado);

resultado = (4 + 5) * 6 / 3; 
console.log(resultado);
