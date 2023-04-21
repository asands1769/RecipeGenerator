import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-generator';
  currentUser;
  loggedIn: boolean;
  constructor(private http: HttpClient) { 
  }
  ngOnInit(): void {
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

}
