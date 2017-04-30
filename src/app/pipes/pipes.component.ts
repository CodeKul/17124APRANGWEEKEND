import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  cost: number;
  dt: string;
  name: string;

  systems: string[];

  future: Promise<string>;

  constructor() {
    this.systems = [];

    this.cost = 1500;
    this.dt = new Date().toISOString();
    this.name = 'codekul.com';

    this.systems.push('android');
    this.systems.push('apple');
    this.systems.push('windows');
    this.systems.push('rim');
    this.systems.push('symbian');

    this.future = new Promise<string>((res, rej) => {
      setTimeout(() => {
        res('Yes, its async');
      }, 1500);
    });
  }

  ngOnInit() {
  }

  add(system: string) {
    this.systems.push(system);
  }
}
