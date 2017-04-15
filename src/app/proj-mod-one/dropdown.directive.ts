import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open')
  isOpen :boolean;

  constructor() { 
  }

  @HostListener('click')
  onClick()  {
    this.isOpen = true;
  }

  @HostListener('mouseleave')
  onMouseLeft() {
    this.isOpen = false;
  }
}
