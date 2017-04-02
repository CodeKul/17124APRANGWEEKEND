import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent  {
  user = {
    userName: 'android',
    password : 'android'
  };
  constructor() { }

  print(){
    console.log(this.user);
  }
}
