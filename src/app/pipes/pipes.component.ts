import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  cost: number;
  dt : string;
  name : string;

  constructor() {
    this.cost = 1500;
    this.dt = new Date().toISOString();
    this.name = 'codekul.com';
  }

  ngOnInit() {
  }

}
