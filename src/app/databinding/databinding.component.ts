import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  myName = 'android';
  constructor() { }

  ngOnInit() {
  }

  giveMeName(): string {
    return this.myName + new Date();
  }

  onReceiveEvent(date: string) {
    this.myName = date;
  }
}
