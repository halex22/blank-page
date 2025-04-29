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

  onNoteDelete(noteId: number) {
    this.service.removeNote(noteId)
  }

  // noteList = computed(() => {
  //   return this.service.notes().map( note => {
  //     const {id, last_edit, content} = note
  //     const shortContent = content.slice(0, 10)
  //     return {id , last_edit, shortContent}
  //   })
  // } )

}
