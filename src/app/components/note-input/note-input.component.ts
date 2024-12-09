import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { NoteType } from '../../models/note.model';
import { NotificationService } from '../../services/notifiy.service';

@Component({
  selector: 'app-note-input',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.css']
})
export class NoteInputComponent {
  content = '';
  selectedType: NoteType = 'Message';
  noteTypes: NoteType[] = ['Message', 'Phone', 'Coffee', 'Beer', 'Meeting'];
  notes:any;
  constructor(private noteService: NoteService,private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notify$.subscribe(() => {
      const notes:any = this.noteService.getNotes();
      this.notes= notes.source._value.length;
    });
  }

  getTypeIcon(type: NoteType): string {
    const icons: Record<NoteType, string> = {
      Message: '💬',
      Phone: '📞',
      Coffee: '🍵',
      Beer: '🍺',
      Meeting: '👥'
    };
    return icons[type];
  }

  selectType(type: NoteType): void {
    this.selectedType = type;
  }
  
  addNote(type: NoteType): void {
    if (this.content) {
      this.noteService.addNote({
        content: this.content,
        type,
        user: 'You'
      });
      this.content = '';
      const notes:any = this.noteService.getNotes();
      this.notes= notes.source._value.length;
    }
  }
}