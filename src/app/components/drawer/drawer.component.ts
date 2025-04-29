import { Component, computed } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { inject } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-drawer',
  imports: [DatePipe],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {

  readonly service = inject(NotesService)

  changeCurrentNote(noteId: number) {
    const targetNote = this.service.notes().find(note => note.id === noteId)
    if (!targetNote) return
    this.service.currentNote.set(targetNote)
  }

  onNoteDelete(noteId: number) {
    this.service.removeNote(noteId)
  }


}
