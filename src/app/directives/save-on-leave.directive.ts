import { Directive, ElementRef, HostListener, inject, Input,  WritableSignal } from '@angular/core';
import { Note } from '../models/note';

@Directive({
  selector: '[saveOnLeave]'
})
export class SaveOnLeaveDirective {

  private el = inject(ElementRef)

  @Input() saveOnLeave!:  {saveFnt: Function}

  @HostListener('mouseleave') onMouseLeave() {
    // this.saveNote()
  }

  @HostListener('focusout') onFocusOut() {
    this.saveOnLeave.saveFnt()
    console.log('focus out of the div')
  }

  saveNote() {
    // const updatedText = this.el.nativeElement.innerText
    // this.saveOnLeave.note.update(prev => {
    //   const {creation_date, last_edit} = prev
    //   return {content: updatedText, creation_date, last_edit}
    // })
    // this.saveOnLeave.note().content = updatedText
    // this.saveOnLeave.saveFnt(this.saveOnLeave.note())
  }

  @HostListener('focus') onFocus() {
  this.moveCaretToEnd();

  }

  moveCaretToEnd() {
    const input = this.el.nativeElement;
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }

}
