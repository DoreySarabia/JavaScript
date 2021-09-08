class Persona{

    static ContadorPersonas = 0; 

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.ContadorPersonas; 
        this._nombre = nombre; 
        this._apellido = apellido; 
        this._edad = edad; 
    }

    get idPersona(){
        return this._idPersona; 
    }
    get nombre(){
        return this._nombre; 
    }
    set nombre(nombre){
        this._nombre = nombre; 
    }
    get apellido(){
        return this._apellido; 
    }
    set apellido(apellido){
        this._apellido = apellido; 
    }
    get edad(){
        return this._edad; 
    }
    set edad(edad){
        this._edad = edad; 
    }

    ToString(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad; 
    }
}




class Empleado extends Persona{

    static ContadorEmpleados = 0; 

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad); 
       
        this._idEmpleado = ++ Empleado.ContadorEmpleados;
        this._sueldo = sueldo;  
    }

    get idEmpleado(){
        return this._idEmpleado; 
    }
    get sueldo(){
        return this._sueldo; 
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    ToString(){
        return  super.ToString() + ' ' + this._idEmpleado + ' ' + this._sueldo
    }
}



class Cliente extends Persona{

    static ContadorClientes = 0; 

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad); 

        this._idCliente = ++ Cliente.ContadorClientes; 
        this._fechaRegistro = fechaRegistro; 
    }

    get idCliente(){
        return this._idCliente; 
    }
    get fechaRegistro(){
        return this._fechaRegistro; 
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro; 
    }
    ToString(){
        return super.ToString() + ' ' + this._idCliente + ' ' + this._fechaRegistro; 
    }

}



let persona1 = new Persona ('Nombre1', 'Apellido1', '28');
console.log(persona1); 

let persona2 = new Persona ('Nombre2', 'Apellido2', '29');
console.log(persona2); 

let empleado1 = new Empleado ('empleado1', 'apellidoem', '23', 234); 
console.log(empleado1.ToString());

let empleado2 = new Empleado ('empleado2', 'apellidoem2', '26', 23433); 
console.log(empleado2.ToString());

let cliente1 = new Cliente('cliente1', 'apellidocli', '21', new Date()); 
console.log(cliente1.ToString()); 