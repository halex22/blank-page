import { Component, inject } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  service = inject(NotesService)
  isDark = false

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

  onAddNote() {
    console.log('creating new note')
    this.service.addNewNote()
  }

  changeTheme() {
    this.isDark = !this.isDark
    this.isDark ? this.turnOnDarkMode() : this.turnOffDarkMode() 

  } 

  private turnOnDarkMode() {
    const body = document.body
    body.classList.add('dark-theme')
    document.querySelectorAll('svg').forEach(icon => {
      icon.classList.add('dark-icon')
    })
    document.querySelector('#editZone')!.classList.add('white-shadow')
  }

  private turnOffDarkMode() {
    const body = document.body
    body.classList.remove('dark-theme')
    document.querySelectorAll('svg').forEach(icon => {
      icon.classList.remove('dark-icon')
    })
    document.querySelector('#editZone')!.classList.remove('white-shadow')

  }

  
}
