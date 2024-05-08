import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  segment = 'chats';

  constructor() { }

  ngOnInit() {
  }

  logout() {
    

  }

  onSegmentChanged(event: any) {
    console.log(event);
  }

}
