import { Component, OnInit } from '@angular/core';
import { RegisterFormDTO } from '../RegisterFormDTO';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/register'
   }

  ngOnInit() {
  }

  login(userInformation: {username: String, password: String, verify: String}) {
        let loginInfo: RegisterFormDTO = {
          username: userInformation.username,
          password: userInformation.password,
          verifyPassword: userInformation.verify
        }
        console.log(loginInfo);
        this.http.post(this.usersUrl, loginInfo).subscribe((res) =>{
          console.log(res)
        });
  } 
}
