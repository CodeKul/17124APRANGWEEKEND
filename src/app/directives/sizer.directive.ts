import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective implements OnInit {

  constructor(private elRef: ElementRef, private rend: Renderer2) {
  }

  ngOnInit() {
    this.rend.setStyle(this.elRef.nativeElement, 'width', '200px');
    // this.elRef.nativeElement.style.width = '500px';
    console.log(`ngOnInit`);
  }

  @HostListener('mouseenter')
  whenMouseEnters() {
    console.log(`mouseenter`);
    this.rend.removeClass(this.elRef.nativeElement, 'mixMn');
    this.rend.addClass(this.elRef.nativeElement, 'mixLg');
    //this.rend.setStyle(this.elRef.nativeElement, 'width', '500px');
    //this.rend.setStyle(this.elRef.nativeElement, 'background','red');
  }

  @HostListener('mouseleave')
  whenMouseLeaves() {
    console.log(`mouseleave`);
    this.rend.removeClass(this.elRef.nativeElement, 'mixLg');
    this.rend.addClass(this.elRef.nativeElement, 'mixMn');
    // this.rend.setStyle(this.elRef.nativeElement, 'width', '200px');
    // this.rend.setStyle(this.elRef.nativeElement, 'background','white');
  }
}
