import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective {

  @Input() set myIf(condition: boolean) {
    if(condition) this.vcRef.createEmbeddedView(this.tempRef);
    else this.vcRef.clear();
  }
  constructor(
    private tempRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }
}
