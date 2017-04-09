import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() myData : string;

  constructor() { }

  ngOnChanges() {
    this.lg(`ngOnChanges`);
  }
  ngOnInit() {
    this.lg(`ngOnInit`);
  }
  ngDoCheck() {
    this.lg(`ngDoCheck`);
  }
  ngAfterContentInit() {
    this.lg(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
    this.lg(`ngAfterContentChecked`);
  }
  ngAfterViewInit() {
    this.lg(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
    this.lg(`ngAfterViewChecked`);
  }
  ngOnDestroy() {
    this.lg(`ngOnDestroy`);
  }

  lg(msg : string) {
    console.log(`${msg}`);
  }
}
