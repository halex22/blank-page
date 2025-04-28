import { Component, Input, input, output, WritableSignal } from '@angular/core';

@Component({
  selector: 'div[page-content]',
  imports: [],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss'
})
export class PageContentComponent {

  @Input({required: true, alias: 'note-content'}) currentNote!: WritableSignal<string>

  constructor() { }


}
 