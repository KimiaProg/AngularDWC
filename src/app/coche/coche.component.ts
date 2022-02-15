import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  public titulo:string;
  constructor() {
    this.titulo= "Coche";
   }

  ngOnInit(): void {
  }

}
