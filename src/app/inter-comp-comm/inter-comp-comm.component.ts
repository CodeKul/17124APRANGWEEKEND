import { Color } from './color';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-comp-comm',
  templateUrl: './inter-comp-comm.component.html',
  styleUrls: ['./inter-comp-comm.component.css']
})
export class InterCompCommComponent implements OnInit {

  color : Color;
  constructor() { }

  ngOnInit() {
  }

  onMagicInParent(color : Color) {
    this.color = color;
    console.log(`parent ${color.left} ${color.right}`);
  }
}
