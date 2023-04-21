import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { LoginFormDTO } from '../LoginFormDTO';
import { AuthenticationFailed } from '../AuthenticationFailed';
import { User } from '../User';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})

export class LogincomponentComponent implements OnInit {
  private usersUrl: string;
  incorrectPassword: boolean;
  currentUser: User;
  private response: AuthenticationFailed[];
  constructor(private http: HttpClient, private router: Router) {
    this.usersUrl = 'http://localhost:8080/login'
    this.response = [];
    this.incorrectPassword = false;
    this.currentUser = new User("Blank", 1);
   }

  ngOnInit() {
  }

  login(userInformation: {username: String, password: String}) {
        this.incorrectPassword = false;
        let loginInfo: LoginFormDTO = {
          username: userInformation.username,
          password: userInformation.password
        }
        this.http.post(this.usersUrl, loginInfo).subscribe((res) =>{
          console.log(res)
          for (const k in res){
            if (k == "failed"){
                 this.incorrectPassword = true;
            }
            else if(k == 'username'){
              window.fetch('http://localhost:8080/currentUser').then((response) =>{
                response.json().then((data) =>{
                  console.log(data)
                  let rawUser = data;
                  this.currentUser.username = rawUser.username;
                  this.currentUser.id = rawUser.id;
                  this.router.navigate(["/profile"], {state: {data: this.currentUser}})
                })
              })
            }
          }
        });
  } 
}
