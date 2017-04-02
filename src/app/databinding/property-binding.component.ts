import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  inputValue: string;
  redBorder = '1px solid red';
  inputType = 'button';

  constructor() {
    this.inputValue = 'android';
  }
}
