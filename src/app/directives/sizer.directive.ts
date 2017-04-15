import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective implements OnInit {

  @Input() @HostBinding('style.width') sizer : string;

  constructor(private elRef: ElementRef, private rend: Renderer2) {
  }

  ngOnInit() {
    this.rend.setStyle(this.elRef.nativeElement, 'width', this.sizer);
    // this.elRef.nativeElement.style.width = '500px';
  }

  @HostListener('mouseenter')
  whenMouseEnters() {
    //this.rend.removeClass(this.elRef.nativeElement, 'mixMn');
    //this.rend.addClass(this.elRef.nativeElement, 'mixLg');
    //this.rend.setStyle(this.elRef.nativeElement, 'width', '500px');

    this.sizer = '500px';
  }

  @HostListener('mouseleave')
  whenMouseLeaves() {
    // this.rend.removeClass(this.elRef.nativeElement, 'mixLg');
    // this.rend.addClass(this.elRef.nativeElement, 'mixMn');
    //this.rend.setStyle(this.elRef.nativeElement, 'width', this.sizer);

    this.sizer = '200px';
  }
}
