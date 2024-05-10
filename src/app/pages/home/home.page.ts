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

  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;

  segment = 'chats';
  open_new_chat = false;
  users: Observable<any[]>

  //users = [
   // { id: 1, name: 'Mireum', photo: 'https://i.pravatar.cc/375'},
    //{ id: 2, name: 'Nikhil', photo: 'https://i.pravatar.cc/370'},
  //];
  chatRooms = [
    { id: 1, name: 'Mireum', photo: 'https://i.pravatar.cc/375'},
    { id: 2, name: 'Nikhil', photo: 'https://i.pravatar.cc/370'},
  ];

  constructor(private router: Router,
    private chatService: ChatService
  ) { }

  ngOnInit() {
  }

  async logout() {
    try {
      console.log('logout');
    this.popover.dismiss();
    await this.chatService.auth.logout();
    this.router.navigateByUrl('/login', {replaceUrl: true});
     } catch(e) {
      console.log(e);
     }
  }

  onSegmentChanged(event: any) {
    console.log(event);
  }

  newChat() {
    this.open_new_chat = true;
    if(!this.users) this.getUsers();
  }

  getUsers() {
    this.chatService.getUsers();
    this.users = this.chatService.users;
    }

  onWillDismiss(event: any) {

  }

  cancel() {
    this.modal.dismiss();
    this.open_new_chat = false;
  }

  async startChat(item) {
    try {
     
     const room = await this.chatService.createChatRoom(item?.uid);
     console.log('room: ', room);
     this.cancel();
     const navData: NavigationExtras = {
      queryParams: {
       name: item?.name
       }
      };
      this.router.navigate(['/', 'home', 'chats', room?.id], navData);
     
     } catch(e) {
       console.log(e);
       
       }
      }

  getChat(item) {
    this.router.navigate(['/', 'home', 'chats', item?.id]);
  }
}
