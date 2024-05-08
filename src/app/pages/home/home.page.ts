import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  segment = 'chats';
  open_new_chat = false;
  users = [
    { id: 1, name: 'Mireum', photo: 'https://i.pravatar.cc/385'},
    { id: 2, name: 'Nikhil', photo: 'https://i.pravatar.cc/390'},
  ]

  constructor() { }

  ngOnInit() {
  }

  logout() {
    

  }

  onSegmentChanged(event: any) {
    console.log(event);
  }

  newChat() {
    this.open_new_chat = true;
  }

  onWillDismiss(event: any) {

  }

  cancel() {

  }

  startChat(item) {
    
  }
}
