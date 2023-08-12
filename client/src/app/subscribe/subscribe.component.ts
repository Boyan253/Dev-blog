import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent {
  constructor() { }

  subNotification() {
    alert('Subscribe is Not Working Right Now');
    console.log('here');
  }
}
