import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'div[page-content]',
  imports: [],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss'
})
export class PageContentComponent {

  @Input({required: true, alias: 'note-content'}) currentNote!: string

  get formattedNote(): string {
    return this.currentNote.replace(/\n/g, '<br>')
  }

}
 