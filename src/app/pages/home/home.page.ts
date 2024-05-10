import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('new_chat') modal: ModalController; // Reference to the new chat modal
  @ViewChild('popover') popover: PopoverController; // Reference to the popover controller

  segment = 'chats'; // Default segment value
  open_new_chat = false; // Flag to control the visibility of the new chat modal
  users: Observable<any[]>; // Observable for storing user data

  chatRooms = [ // Initial chat room data
    { id: 1, name: 'Mireum', photo: 'https://i.pravatar.cc/375'},
    { id: 2, name: 'Nikhil', photo: 'https://i.pravatar.cc/370'},
  ];

  constructor(
    private router: Router,
    private chatService: ChatService
  ) { }

  ngOnInit() {
  }

  // Method to handle logout
  async logout() {
    try {
      console.log('logout');
      this.popover.dismiss(); // Dismiss popover
      await this.chatService.auth.logout(); // Logout from chat service
      this.router.navigateByUrl('/login', { replaceUrl: true }); // Navigate to login page
    } catch(e) {
      console.log(e);
    }
  }

  // Method to handle segment change
  onSegmentChanged(event: any) {
    console.log(event);
  }

  // Method to open new chat modal
  newChat() {
    this.open_new_chat = true; // Set flag to open modal
    if (!this.users) this.getUsers(); // Fetch users if not already fetched
  }

  // Method to fetch users
  getUsers() {
    this.chatService.getUsers(); // Fetch users from chat service
    this.users = this.chatService.users; // Store users in observable
  }

  // Method to handle modal dismissal
  onWillDismiss(event: any) {
    // Do something when the modal will dismiss
  }

  // Method to cancel modal
  cancel() {
    this.modal.dismiss(); // Dismiss modal
    this.open_new_chat = false; // Set flag to close modal
  }

  // Method to start a new chat
  async startChat(item) {
    try {
      const room = await this.chatService.createChatRoom(item?.uid); // Create new chat room
      console.log('room: ', room);
      this.cancel(); // Cancel modal
      const navData: NavigationExtras = {
        queryParams: {
          name: item?.name
        }
      };
      this.router.navigate(['/', 'home', 'chats', room?.id], navData); // Navigate to chat room
    } catch(e) {
      console.log(e);
    }
  }

  // Method to navigate to a chat room
  getChat(item) {
    this.router.navigate(['/', 'home', 'chats', item?.id]); // Navigate to selected chat room
  }
}
