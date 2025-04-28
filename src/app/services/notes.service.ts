import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { type Note } from '../models/note';
import { effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private readonly NOTES_KEY = 'NOTES'
  private readonly CURRENT_NOTE_KEY = 'CURRENT_NOTE'

  currentNote: WritableSignal<Note>
  notes:  WritableSignal<Note[]>


  constructor() { 
    this.currentNote = signal(this.loadCurrentNote())
    this.notes = signal(this.loadAllNotes())
  }

  saveAllNotes() {

    const updatedNotes = this.notes().forEach(note => {
      if (note.id === this.currentNote().id) return this.currentNote()
      return note
    })

    localStorage.setItem(this.NOTES_KEY, JSON.stringify(updatedNotes))

  }

  loadAllNotes() {
    const savedNotes = localStorage.getItem(this.NOTES_KEY)
    return JSON.parse(savedNotes ?? '[]')
  }


  saveCurrentNote(): void {
    localStorage.setItem(this.CURRENT_NOTE_KEY, JSON.stringify(this.currentNote()))
  }

  loadCurrentNote(): Note {
    const savedNote = localStorage.getItem(this.CURRENT_NOTE_KEY)
    return savedNote ? JSON.parse(savedNote) : this.generateDefaultNote()
  }

  generateDefaultNote(): Note {
    const defaultNote: Note = {
      content: 'sample content',
      creation_date: Date.now(),
      last_edit: Date.now(),
      id: 0
    }
    return defaultNote
  }

}
