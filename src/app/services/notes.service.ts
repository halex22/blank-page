import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { type Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  note: WritableSignal<Note>
  test = signal('')

  constructor() { 
    this.note = signal(this.loadNote())
  }

  saveNote(): void {
    localStorage.setItem('NOTES', JSON.stringify(this.note()))
  }

  loadNote(): Note {
    const savedNote = localStorage.getItem('NOTES')
    console.log(savedNote)
    return savedNote ? JSON.parse(savedNote) : this.generateDefaultNote()
  }

  generateDefaultNote(): Note {
    const defaultNote: Note = {
      content: 'sample content',
      creation_date: Date.now(),
      last_edit: Date.now()
    }
    return defaultNote
  }

}
