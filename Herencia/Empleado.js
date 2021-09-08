class Empleado extends Persona{

    static ContadorEmpleados = 0; 

    constructor(edad, sueldo){
       
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