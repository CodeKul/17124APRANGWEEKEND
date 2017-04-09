import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
    selector: 'app-sub-content',
    template: `
   <div class="container">
      <div class="row" >
       <div class="col-md-12">
         <ng-content select="[first]"></ng-content>
       </div>
     </div>

     <div class="row">
          <h1>Content and Content Child</h1>
          <hr>
      </div>
     <div class="row">
       <div class="col-md-12">
         <label>User name </label><input type="text" />
       </div>
     </div>
     <div class="row">
       <div class="col-md-12">
         <ng-content select="[second]"></ng-content>
       </div>
     </div> 
   </div>
  `,
    styles: []
})
export class SubContentComponent implements OnInit {

    @ContentChild('ip') ip: ElementRef;
    
    actualIp : string;

    constructor() { }

    ngOnInit() {
    }

    myIp() {
      this.actualIp = this.ip.nativeElement.value;
        console.log(`sub called ${this.ip.nativeElement.value}`);
    }
}
