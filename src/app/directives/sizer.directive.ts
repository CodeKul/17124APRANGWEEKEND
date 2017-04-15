import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective implements OnInit{

  constructor(private elRef : ElementRef, private rend : Renderer2) {
  }

  ngOnInit() {
    this.rend.setStyle(this.elRef.nativeElement, 'width', '500px');
    // this.elRef.nativeElement.style.width = "500px";
  }
}
