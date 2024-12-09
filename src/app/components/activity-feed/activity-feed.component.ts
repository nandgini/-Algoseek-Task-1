import { Component } from '@angular/core';
import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';
import { NotificationService } from '../../services/notifiy.service';

@Component({
  selector: 'app-activity-feed',
  standalone: true,
  imports: [AsyncPipe, DatePipe, NgFor],
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css']
})
export class ActivityFeedComponent {
  notes$ = this.noteService.getNotes();

  constructor(private noteService: NoteService,private notificationService : NotificationService) {}

  getTypeIcon(type: Note['type']): string {
    const icons: Record<Note['type'], string> = {
      Message: '💬',
      Phone: '📞',
      Coffee: '🍵',
      Beer: '🍺',
      Meeting: '👥'
    };
    return icons[type];
  }

  getActionText(type: Note['type']): string {
    const actions: Record<Note['type'], string> = {
      Message: 'added a note to',
      Phone: 'had a call with ',
      Coffee: 'had coffee with',
      Beer: 'had a beer with',
      Meeting: 'had a meeting with'
    };
    return actions[type];
  }

  deleteNote(id: string): void {
    this.noteService.deleteNote(id);
    this.notificationService.triggerNotification();
  }
}