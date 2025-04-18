import { Directive, ElementRef, inject, Input, WritableSignal } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[updateContent]'
})
export class UpdateContentDirective {

  private el = inject(ElementRef)
  @Input() updateContent!: WritableSignal<string>


  @HostListener('input')
  onInput() {
    const updatedText = this.el.nativeElement.querySelector('p').innerHTML
    this.updateContent.set(updatedText)
    console.log(updatedText)
  }


}
