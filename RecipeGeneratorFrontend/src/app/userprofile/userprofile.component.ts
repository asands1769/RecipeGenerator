import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  currentUser;
  loggedIn: Boolean;
  constructor(private http: HttpClient) { 
    this.currentUser;
    this.loggedIn = false;
  }

  ngOnInit(): void {
    this.verifyLoggedIn();
  }
 verifyLoggedIn(){
  if(localStorage.getItem('username') != null){
    this.currentUser = localStorage.getItem('username')
    this.loggedIn = true;
  }

}
logOut(){
  localStorage.clear()
  console.log(localStorage.getItem('username'))
  this.loggedIn = false;
}
}
