import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[saveOnLeave]'
})
export class SaveOnLeaveDirective {

  @Input() saveOnLeave!:  {saveFnt: Function}

  @HostListener('mouseleave') onMouseLeave() {
    this.saveOnLeave.saveFnt()
  }

  @HostListener('focusout') onFocusOut() {
    this.saveOnLeave.saveFnt()
  }

}
