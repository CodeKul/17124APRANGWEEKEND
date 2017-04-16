import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="well">
            {{newData}}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TwoComponent implements OnInit {

  newData : string;

  constructor(
    private data : DataService
  ) { }

  ngOnInit() {
    this.data.listen({
      listen :  mob => this.newData = mob
    });
  }
}
