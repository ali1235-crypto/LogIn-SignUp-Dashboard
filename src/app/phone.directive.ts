import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {

  @HostListener('click')phon() {
    if(this.el.nativeElement.value=="")
    this.el.nativeElement.value="961";
  }
  constructor(private el:ElementRef) { }

}
