import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-dir',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul>
            <li *ngFor="let mobile of mobiles">{{mobile}}</li>
          </ul>
        </div>
      </div>
       <div class="row">
        <div class="col-md-8">
          <input type="text" *ngIf="isShown; then thnBlk; else elsBlk" />
          <ng-template #thnBlk>Then Block </ng-template>
          <ng-template #elsBlk> Else This </ng-template>
        </div>
        <div class="col-md-4">
           <input value="Okay" type="button" (click)="isShown = !isShown" class="btn btn-primary">
        </div>
      </div> 
      <div class="row">
        <div class="col-md-8">
          <input type="text" #num/> <input (click)="numDay = num.value"type="button" class="btn btn-primary" value="Okay"/>
          <div [ngSwitch]="numDay">
            <div *ngSwitchCase="1">Monday</div>
            <div *ngSwitchCase="2">Tuesday</div>
            <div *ngSwitchCase="3">Wedensday</div>
            <div *ngSwitchDefault>Sunday</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ng-template [ngIf]="isShown">
              <div>This Visible</div>
            </ng-template>
          </div>
        </div> 
        <div class="row">
          <div class="col-md-12">
            <ng-template [myIf]="isShown">
              <div>This Custom Structural Directive </div>
            </ng-template>
          </div>
        </div> 
         <div class="row">
          <div class="col-md-12">
            <div *myIf="isShown">
              This Sugured Custom Structural Directive
            </div>
          </div>
        </div> 
    </div>
  `,
  styles: []
})
export class StrDirComponent implements OnInit {

  mobiles = [
    'Android',
    'Apple',
    'B B',
    'Windows',
    'Bada'
  ];
  constructor() { }

  ngOnInit() {
  }
}
