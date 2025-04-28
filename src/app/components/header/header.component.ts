import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private service:NotesService) {}

  onDownload() {
    const note = new Blob([this.service.currentNote().content], {type: 'text/plain'})
    const url = URL.createObjectURL(note)
    const link = document.createElement('a')
    link.href = url
    link.download = 'note.txt'
    document.body.appendChild(link)
    link.click()

    link.remove()
    URL.revokeObjectURL(url)
  }
}
