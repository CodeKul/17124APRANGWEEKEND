import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-dir',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Attribute Directives</h1>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div [ngClass]="{redBorder : isShown}">
            this is codekul.com
          </div>  
        </div>
        <div class="col-md-4">
            <input value="Show" type="button" (click)="isShown = !isShown" class="btn btn-primary"/>
          </div>
      </div>
    </div>
  `,
  styles: [`
    .redBorder {
      border : 1px solid red;
    }
  `]
})
export class AttrDirComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
