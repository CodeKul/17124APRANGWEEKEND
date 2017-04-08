import { Color } from './color';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-emiiter',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
         <input type="button" class="btn btn-primary" value="Magic" (click)="onMagic()"/>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ColorEmiiterComponent implements OnInit {

  colors = [
    '#ff4444',
    '#ffbb33',
    '#00C851',
    '#33b5e5',
    '#2BBBAD',
    '#4285F4',
    '#aa66cc',
    '#2E2E2E',
    '#4B515D',
    '#3F729B',
    '#37474F'
  ];
  @Output() magicEvent : EventEmitter<Color>;

  constructor() { 
    this.magicEvent = new EventEmitter<Color>();
  }

  ngOnInit() {
  }

  onMagic() {
    let color : Color = new Color();
    color.left = this.colors[Math.floor(Math.random() * 12)];
    color.right = this.colors[Math.floor(Math.random() * 12)];
    console.log(`left - ${color.left} right - ${color.right}`);
    
    this.magicEvent.emit(color);
  }
}
