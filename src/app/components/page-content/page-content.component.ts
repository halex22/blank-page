import { Component, input, OnInit, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'div[page-content]',
  imports: [],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss'
})
export class PageContentComponent implements OnInit{

  // @Input({required:true, alias:'note-content'}) currentNote!: WritableSignal<string>
  currentNote = input.required({alias: 'note-content'})

  constructor() { 
  }

  ngOnInit(): void {
    console.log('logging on init')
    console.log(this.currentNote)
  }


}
 