import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-heavy',
  templateUrl: './heavy.component.html',
  styleUrls: ['./heavy.component.css']
})
export class HeavyComponent implements OnInit {

  it: string;
  constructor() { }

  ngOnInit() {
    this.heavy().subscribe(i => {
      this.it = i
      console.log('called');
    });

    //Observable.interval(500).subscribe(i => this.it = ''+i);
  }

  heavy(): Observable<string> {
    return Observable.create((sub: Subscriber<string>) => {
      // heavy operation
      sub.next('Heavy Ops');
      sub.complete();
    });
  }
}
