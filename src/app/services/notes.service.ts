import { Injectable, Signal, signal } from '@angular/core';
import { type Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  note: Signal<Note>

  constructor() { 
    this.note = signal(this.loadNote())
  }

  saveNote(oldNote: Note): void {
    oldNote.last_edit = Date.now()
    localStorage.setItem('NOTES', JSON.stringify(oldNote))
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
