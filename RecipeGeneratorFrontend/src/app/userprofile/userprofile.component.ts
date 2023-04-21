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
  loadCounter: number;
  loggedIn: Boolean;
  constructor(private http: HttpClient, private router: Router) { 
    this.loggedIn = false;
    this.loadCounter;
  }

  ngOnInit(): void {
    this.verifyLoggedIn();
  }
verifyLoggedIn(){
                this.loggedIn = false;
                this.http.get('http://localhost:8080/currentUser')
                .pipe(map((response) => {
                  let user = [];
                  for (let key in response){
                    user.push(response[key]);
                  }
                  return user;
                }))
                .subscribe((response) => {
                    if(response.length != 0){
                    this.currentUser = response;
                    this.loggedIn = true;
                    }
                })
}
logOut(){
  this.http.get('http://localhost:8080/logout').subscribe((response)=> {
    console.log(response)
  })
  this.loggedIn = false;
}
}
