import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-more-templates',
  templateUrl: './more-templates.component.html',
  styleUrls: ['./more-templates.component.css']
})
export class MoreTemplatesComponent  {

  @ViewChild('ip') ip : ElementRef;
  constructor() { }

   myIp() {
    console.log(`called ${this.ip.nativeElement.value}`);
  }
}
