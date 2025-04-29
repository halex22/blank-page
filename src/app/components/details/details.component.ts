import { Component, input } from '@angular/core';

@Component({
  selector: 'div[details]',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  totalWords = input.required<number>({alias: 'words-total'})
  totalChars = input.required<number>({alias: 'chars-total'})

}
