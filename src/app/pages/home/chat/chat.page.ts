import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  name: string = 'Sender';
  message: string;
  isLoading = false;
  currentUserId = 1;
  //chat: any;
  chats = [
    {id: 1, sender: 1, message: 'hi'},
    {id: 2, sender: 2, message: 'bye'},
  ];

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
   
    this.chats.push({ id: this.chats.length + 1, sender: this.currentUserId, message: this.message });
   
    const responses = ["Hello!", "How are you?", "Nice to hear from you!", "What's up?", "I'm here."];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];

    this.chats.push({ id: this.chats.length + 1, sender: 2, message: randomResponse });
    
    this.message = '';

}
}

