import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sub-more',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <input type="text" #header/>
          <input value="Okay" type="button" class="btn btn-primary" (click)="myHeader=header.value"/>
        </div>
        <div class="col-md-6">
          <input value="Okay Again" type="button" class="btn btn-primary" (click)="changeHeader()"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h1>{{myHeader}}</h1>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SubMoreComponent implements OnInit {

  myHeader : string;
  @ViewChild('header') header : ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  changeHeader() {
    this.myHeader = this.header.nativeElement.value;
  }
}
