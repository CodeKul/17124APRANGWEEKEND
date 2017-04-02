import { MyService } from './my.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  user = {
    name : 'android',
    age :  10
  };
  constructor(
    private my : MyService
  ) { 
    this.user.name = this.my.myName;
  }

  ngOnInit() {
  }

}
