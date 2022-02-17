import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { RopaService } from '../ropa.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[RopaService]
})
export class HomeComponent implements OnInit {

  public titulo:string;
  public ropas:Array<string>;
  public ropa:string;
  constructor(private _router:Router, private _ropaS:RopaService) {
    this.titulo= "Home";
    this.ropas=this._ropaS.obtenerRopa();
    this.ropa="";
   }

  ngOnInit(): void {
    
  }

  alumCurso(curso:string): void{
    this._router.navigate(['/alumnado/' + curso]);
  }
  aniadirRopa(){
    this._ropaS.addRopa(this.ropa);
  }
  borrarRopa(){
    this._ropaS.deleteRopa(this._ropaS.getIndex(this.ropa));
  }

  borrarRopaIndex(ropa:string){
    this._ropaS.deleteRopa(this._ropaS.getIndex(ropa));
  }
}
