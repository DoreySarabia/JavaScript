

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
