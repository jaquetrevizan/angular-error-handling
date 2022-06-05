import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient, public notificationService: NotificationService) { }

  showSuccess() {
    this.notificationService.showSuccess('Success')
  }

  throwError() {
    throw new Error('Error message')
  }

  throwHttpError() {
    this.http.get('urlhere').subscribe()
  }

}
