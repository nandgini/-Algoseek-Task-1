import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifySource = new Subject<void>(); // Type can be adjusted
  notify$ = this.notifySource.asObservable();

  triggerNotification() {
    this.notifySource.next();
  }
}
