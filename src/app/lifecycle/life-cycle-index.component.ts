import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-index',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <app-lifecycle [myData]="date" *ngIf="isVisible"></app-lifecycle>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <input type="button" value="okay" (click)="change()"/>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LifeCycleIndexComponent implements OnInit {

  date : string;
  isVisible : boolean;
  constructor() { }

  ngOnInit() {
  }

  change() {
    this.date = '' + new Date();
    this.isVisible = !this.isVisible;
  }
}
