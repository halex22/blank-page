import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { PageContentComponent } from '../page-content/page-content.component';
import { SaveOnLeaveDirective } from '../../directives/save-on-leave.directive';
import { DetailsComponent } from '../details/details.component';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note';

@Component({
  selector: 'app-home',
  imports: [PageContentComponent, SaveOnLeaveDirective, DetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  service = inject(NotesService)

  noteContent = signal<string>(this.service.note().content)
  totalWords = computed(() => this.noteContent().match(/\w+/g)?.length ?? 0)
  totalChars = computed(() => this.noteContent().length)

  updateObj: {note: Signal<Note>, saveFnt: Function} = {
    note: this.service.note,
    saveFnt: this.service.saveNote
  }

  updateNote(updatedContent: any) {
    // this.noteContent.set(updatedContent)
    console.log(updatedContent)
  }
}
