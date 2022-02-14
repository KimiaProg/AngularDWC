import { Component, OnInit } from '@angular/core';
import {Alumnado } from "./alumnado";
import {EmpleadoComponent } from "../empleado/empleado.component";

@Component({
  selector: 'app-alumnado-daw',
  templateUrl: './alumnado-daw.component.html',
  styleUrls: ['./alumnado-daw.component.css']
})
export class AlumnadoDAWComponent implements OnInit {

  public alumnos:Array<Alumnado>;
  public alumnadoUno:boolean;
  public alumnadoSegundo:boolean;

  constructor() {
    this.alumnos= [new Alumnado("Kimia","Ehsano","dd",new Date("2020-01-01"),"d",1,"1",["d","ds"]),
    new Alumnado("Juan","Ehsano","dd",new Date("2020-01-01"),"d",2,"2",["d","ds"]),
    new Alumnado("Maria","Ehsano","dd",new Date("2020-01-01"),"d",2,"2",["d","ds"]),
    new Alumnado("David","Ehsano","dd",new Date("2020-01-01"),"d",2,"1",["d","ds"])];
    this.alumnadoUno=true;
    this.alumnadoSegundo=true;

   }

  alumnado(curso:string) {
    if(curso=='primero'){
      if(this.alumnadoUno==true){
        this.alumnadoUno=false;
       }else{
        this.alumnadoUno=true;
       }
    }else{
      if(this.alumnadoSegundo==true){
        this.alumnadoSegundo=false;
       }else{
         this.alumnadoSegundo=true;
        }
    }
    
   }

   
  ngOnInit(): void {
  }

}
