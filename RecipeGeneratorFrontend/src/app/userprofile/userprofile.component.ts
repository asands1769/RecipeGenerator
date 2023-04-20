import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  currentUser: String;
  constructor() { 
    this.currentUser = history.state.data;
  }

  ngOnInit(): void {
    console.log(history.state.data)
  }

}
