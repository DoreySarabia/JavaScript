
//Contiene propiedades y métodos
let persona = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    email: 'nombre@gmail.com',
    edad: 28, 
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
} 

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona);
console.log(persona.nombreCompleto());


//C R E A R   O B J E T O 

let persona2 = new Object();
persona2.nombre = 'Nombre2';
persona2.direccion = 'calle 12'; 
persona2.telefono = '1234567'; 

console.log(persona2.telefono); 




//A C C E D E R   A   P R O P I E D A D E S 

console.log(persona.nombre);
console.log(persona['apellido']);

//FOR IN 
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}


//Agregar
persona.tel = '1234563';
console.log(persona);

//Eliminar
delete persona.tel;
console.log(persona);



//I M P R I M I R    O B J E T O S  



//Concatenar cada valor de cada propiedad
console.log(persona.nombre, persona.apellido);

//FOR IN 
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Metodo 
let personaArray = Object.values(persona); 
console.log(personaArray);


//Metodo
let personaString = JSON.stringify(persona);
console.log(personaString);



//M E T O D O   G E T 

let persona = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    email: 'nombre@gmail.com',
    edad: 28, 
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona.nombreCompleto);




//M E T O D O   S E T 

let persona = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    email: 'nombre@gmail.com',
    edad: 28, 
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang (lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.lang);
persona.lang = 'en'; 
console.log(persona.lang);
console.log(persona.idioma);






//M É T O D O   C O N S T R U C T O R 
 //Crear varios objetos   
function Persona(nombre, apellido, email){
    this.nombre = nombre; 
    this.apellido = apellido; 
    this.email = email; 
}

let padre = new Persona('Nombre1', 'Apellido1', 'email1');
console.log(padre); 

let madre = new Persona('Nombre2', 'Apellido2', 'email');
console.log(madre);

padre.nombre = 'Nombre3';
console.log(padre); 

console.log(madre);






//A G R E G A R   M E T O D O S   A  C O N S T R U C T O R 

function Persona(nombre, apellido, email){
    this.nombre = nombre; 
    this.apellido = apellido; 
    this.email = email; 
    this.nombreCompleto = function(){
        return this.nombre +  ' '  +  this.apellido;
    }
}

//Prototype
Persona.prototype.tel = '5555555555';

let padre = new Persona('Nombre1', 'Apellido1', 'email1');
console.log(padre.nombreCompleto());
padre.tel = '123456789'; 
console.log(padre.tel); 


let madre = new Persona('Nombre2', 'Apellido2', 'email');
console.log(madre.nombreCompleto());
console.log(madre.tel);




//Quitar new sintaxis

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo = new Array(); 
let miArreglo2 = [];

let miFuncion = new Function (); 
let miFucion2 = function(){};





//C A L L   E N   J S 
let persona1 = {
    nombre: 'Nombre1',
    apellido: 'Apellido1', 
    nombreCompleto: function(titulo, tel){
        return titulo + ' : ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Nombre2',
    apellido: 'Apellido2'
}

//Uso de call
console.log(persona1.nombreCompleto('Lic', '12345678'));

console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero', '4433221122'));



//M E T O D O   A P P L Y 

let persona1 = {
    nombre: 'Nombre1',
    apellido: 'Apellido1', 
    nombreCompleto: function(titulo, tel){
    return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Nombre2',
    apellido: 'Apellido2'
}

console.log(persona1.nombreCompleto('Lic', '122334'));

let arreglo = ['Ing', '124232']; 
console.log(persona1.nombreCompleto.apply(persona2, arreglo));