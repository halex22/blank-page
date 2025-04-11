import { Injectable, Signal, signal } from '@angular/core';
import { type Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private readonly STORAGE_KEY = 'notes'

  note: Signal<Note>

  constructor() { 
    this.note = signal(this.loadNote())
  }

  saveNote(oldNote: Note): void {
    oldNote.last_edit = Date.now()
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(oldNote))
  }

  loadNote(): Note {
    const savedNote = localStorage.getItem(this.STORAGE_KEY)
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
