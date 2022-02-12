export class Alumnado {

    constructor(public nombre: string, public apellido: string, public dni: string, public fecha: Date, public poblacion: string, public tel: number, public curso: string, public modulos: Array<string>) {
    }

    public toString=(): String => {
        return this.nombre + this.curso;

    }
  
   
  }