import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  public titulo:string;
  id:string;

  Coches = [
    {
      id: '1',
      name: "dddd",
      description : "ddddddddd"
    },
    {
      id: '2',
      name: "ddsssdd",
      description : "dddddsssdddd"
    }
  ]
  constructor(private actRout:ActivatedRoute, private _router:Router) {
    this.titulo= "Coche";
    this.id= this.actRout.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

  onBack(): void{
    this._router.navigate(['/coche'])
  }

}
