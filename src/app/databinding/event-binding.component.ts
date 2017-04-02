import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  inputData?: string;
  inputWidth : string;
  constructor() {
    this.inputData = "";
    this.inputWidth = "100px";;
  }

  toUpperCase(ipDt: string): void {
    this.inputData = ipDt.toUpperCase();
  }

  enlarge(){
    this.inputWidth = '200px';
  }
}
