import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { type Note } from '../models/note';
import { effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private readonly NOTES_KEY = 'NOTES'
  private readonly CURRENT_NOTE = ''

  note: WritableSignal<Note>
  notes:  WritableSignal<Note[]>


  constructor() { 
    this.note = signal(this.loadNote())
    this.notes = signal(this.loadAllNotes())

  }

  saveAllNotes() {
    
  }

  loadAllNotes() {
    const savedNotes = localStorage.getItem(this.NOTES_KEY)
    return JSON.parse(savedNotes ?? '[]')
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
