import { Component, input, output } from '@angular/core';

@Component({
  selector: 'div[page-content]',
  imports: [],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss'
})
export class PageContentComponent {

  currentNote = input.required({alias: 'note-content'})

  constructor() { }


}
 