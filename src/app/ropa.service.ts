import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public nombre:string="pantalon"
  public coleccionRopa= ["pan", "dd"];
  constructor() { }

  getRopa() :Array<string>{
    return this.coleccionRopa;
  }
  addRopa( nombrePrenda:string) :Array<string>{
    this.coleccionRopa.push(nombrePrenda);
    return this.getRopa();
  }
  deleteRopa(index:number){
    this.coleccionRopa.splice(index,1);
  }

  obtenerRopa(): Array<string>{
    return this.getRopa();

  }
  getIndex(element:string): number{
    
    return this.coleccionRopa.findIndex((el)=>{
      return el==element;
    })
  }



}
