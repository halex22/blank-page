import { Directive, ElementRef, HostListener, inject, Input, Signal } from '@angular/core';
import { Note } from '../models/note';

@Directive({
  selector: '[saveOnLeave]'
})
export class SaveOnLeaveDirective {

  private el = inject(ElementRef)

  @Input() saveOnLeave!: {note: Signal<Note>, saveFnt: Function}

  @HostListener('mouseleave') onMouseLeave() {
    this.saveNote()
  }

  @HostListener('focusout') onFocusOut() {
    this.saveNote()
  }

  saveNote() {
    const updatedText = this.el.nativeElement.innerText
    this.saveOnLeave.note().content = updatedText
    this.saveOnLeave.saveFnt(this.saveOnLeave.note())
  }

}
