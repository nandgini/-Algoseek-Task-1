import { Component } from '@angular/core';
import { NoteInputComponent } from './components/note-input/note-input.component';
import { ActivityFeedComponent } from './components/activity-feed/activity-feed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteInputComponent, ActivityFeedComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}