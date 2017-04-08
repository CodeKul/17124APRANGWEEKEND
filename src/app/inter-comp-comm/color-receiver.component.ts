import { Color } from './color';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-receiver',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-6 littleHeight" [style.background]="magicColor?.left">

        </div>
        <div class="col-md-6 littleHeight" [style.background]="magicColor?.right">

        </div>
      </div>
    </div>
  `,
  styles: [
    `.littleHeight {
        height : 300px;
    }`
  ]
})
export class ColorReceiverComponent implements OnInit {

  @Input() magicColor: Color;

  constructor() {
  }

  ngOnInit() {
  }
}
