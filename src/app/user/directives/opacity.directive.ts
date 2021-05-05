import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpacity]'
})
export class OpacityDirective {

  private color_bol: boolean = false;
  constructor
  (
    private el: ElementRef
  ) { }

  @HostListener('click') onClick() {
    this.color_bol = !this.color_bol
    this.toggle();
  }

  private toggle() {
    if(this.color_bol === false) {
      this.el.nativeElement.style.opacity = '1';
    }else {
      this.el.nativeElement.style.opacity = '0.2';
    }
  }
}
