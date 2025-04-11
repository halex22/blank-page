import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[SaveOnLeave]'
})
export class SaveOnLeaveDirective {

  private el = inject(ElementRef)

  @HostListener('mouseleave') onMouseLeave() {
    console.log("You're leaving")
    console.log(this.el.nativeElement.innerText)
    // poi qui possiamo salvare 
  }

}
