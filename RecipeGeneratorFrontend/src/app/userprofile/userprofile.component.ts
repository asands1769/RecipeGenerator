import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  currentUser: User;
  constructor() { 
    this.currentUser = history.state.data.username;
    this.currentUser = new User(history.state.data.username, history.state.data.id)
  }

  ngOnInit(): void {
    console.log(history.state.data)
  }

}
