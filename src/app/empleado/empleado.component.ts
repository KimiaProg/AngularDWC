import { Component, OnInit } from '@angular/core';
import {Empleado } from "./empleado";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public emple:Empleado;
  public emples:Array<Empleado>;
  public colorEmple:string;
 

  constructor() {
    this.emple=new Empleado("Kimia",24,"b",true);
    this.emples=[new Empleado("Kimia",24,"b",true),
    new Empleado("ss",24,"b",true),
    new Empleado("aaaa",24,"b",false)]
    this.colorEmple="red";
   }

  ngOnInit(): void {
    this.emple;
  }

}
