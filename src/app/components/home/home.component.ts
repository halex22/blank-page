import { Component, computed, inject, output, Signal, signal, WritableSignal } from '@angular/core';
import { PageContentComponent } from '../page-content/page-content.component';
import { SaveOnLeaveDirective } from '../../directives/save-on-leave.directive';
import { DetailsComponent } from '../details/details.component';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note';
import { UpdateContentDirective } from '../../directives/update-content.directive';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [PageContentComponent, SaveOnLeaveDirective, DetailsComponent, UpdateContentDirective, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  service = inject(NotesService)
  textToDownload = output<string>()

  note = this.service.note

  noteContent = signal<string>(this.note().content)
  totalWords = computed(() => this.noteContent().match(/\w+/g)?.length ?? 0)
  totalChars = computed(() => this.noteContent().length)
 
  saveChanges = () => { // ask about this context 
    console.info('trying to save')
    console.log(this.note)
    this.note.update(prev => {
      const {creation_date} = prev
      return {content: this.noteContent(), creation_date, last_edit: Date.now()}
    })
    this.service.saveNote()
  }

}
