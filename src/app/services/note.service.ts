import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes = new BehaviorSubject<Note[]>([]);

  getNotes(): Observable<Note[]> {
    return this.notes.asObservable();
  }

  addNote(note: Omit<Note, 'id' | 'timestamp'>): void {
    const newNote: Note = {
      ...note,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    this.notes.next([newNote, ...this.notes.value]);
  }

  deleteNote(id: string): void {
    const updatedNotes = this.notes.value.filter(note => note.id !== id);
    this.notes.next(updatedNotes);
  }
}