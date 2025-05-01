import { Directive, ElementRef, inject, Input, WritableSignal } from '@angular/core';
import { HostListener } from '@angular/core';
import { Note } from '../models/note';

@Directive({
  selector: '[updateContent]'
})
export class UpdateContentDirective {

  private el = inject(ElementRef)
  @Input() updateContent!: WritableSignal<Note>


  @HostListener('input')
  onInput() {
    const updatedText = this.el.nativeElement.innerText ?? ''
    this.updateContent.update(prev => ({
      ...prev,
      content: updatedText
    }))
  }




}
